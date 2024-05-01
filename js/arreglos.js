const numeros =[10,20,30,40,50]


const [,,tercero]=numeros

console.log(tercero)

const carrito = [
    {nombre:'Televisor 20 pulgadas', precio:5000},
    {nombre:'tablet',precio:600},
    {nombre:'teclado', precio:100}
]


carrito.forEach(function(producto){
    console.log(`${producto.nombre}, precio ${producto.precio}`)
})

const nuevoCarrito=carrito.map(function(producto){
    return(`${producto.nombre}, precio: ${producto.precio}`)
})

console.log(nuevoCarrito)