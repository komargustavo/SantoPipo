const articulo = {
  nombre: "Monitor 20 pulgadas",
  precio: 500,
  disponible: true,
};

const informacion = {
  medidas: {
    peso: "1kg",
    medida: "1m",
  },
  fabricacion: {
    pais: "China",
  },
};

console.log(articulo);
console.log(informacion);

const producto = { ...articulo, ...informacion };

console.log(producto);

function articuloNuevo(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const nuevoArticulo = new articuloNuevo("Tablet", 500);
console.log(nuevoArticulo);


console.log(Object.keys(producto))

console.log(Object.values(producto))

console.log(Object.entries(articulo))

// const { disponible, informacion, informacion:{fabricacion, fabricacion:{pais}} } = articulo;
// console.log(
//   `Este producto está disponible? ${disponible} y se abrica en: ${pais}`
// );
