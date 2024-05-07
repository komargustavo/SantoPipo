import http.server
import socketserver
import mysql.connector

# Conectarse a la base de datos MySQL
conexion = mysql.connector.connect(
    host='localhost',
    user='root',
    password='ba578AE3',
    database = 'sistema'
)
cursor = conexion.cursor()

# Función para recuperar los paths de las imágenes desde la base de datos
def recuperar_paths():
    cursor.execute("SELECT path FROM imagenes")
    return cursor.fetchall()

# Crear una página HTML dinámica que contiene las imágenes recuperadas
def crear_pagina_html(paths):
    html = "<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Imágenes desde Base de Datos</title></head><body>"
    for path in paths:
        html += "<img src='" + path[0] + "' alt='Imagen desde Base de Datos'><br>"
    html += "</body></html>"
    return html

# Configurar el servidor para manejar las solicitudes
class ManejadorSolicitudes(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Si la solicitud es para la raíz, devolver la página HTML con las imágenes
        if self.path == '/':
            paths_imagenes = recuperar_paths()
            pagina_html = crear_pagina_html(paths_imagenes)
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(pagina_html.encode())
        else:
            # Si no, servir los archivos estáticos (como imágenes)
            super().do_GET()

# Puerto en el que se ejecutará el servidor
puerto = 8000

# Iniciar el servidor
with socketserver.TCPServer(("", puerto), ManejadorSolicitudes) as httpd:
    print("Servidor activo en el puerto", puerto)
    # Mantener el servidor en funcionamiento
    httpd.serve_forever()

# Cerrar cursor y conexión
cursor.close()
conexion.close()