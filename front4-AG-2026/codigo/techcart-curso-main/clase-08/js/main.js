// main.js — punto donde quedó la Clase 7.
// Este es el PUNTO DE PARTIDA de la Clase 8: durante la clase este archivo se
// reescribe con sintaxis moderna y al final se parte en módulos
// (datos.js · carrito.js · formato.js · ui.js · main.js).

// El catálogo de TechCart, como datos: un array de objetos.
const productos = [
  { nombre: "MacBook Pro 14", precio: 1999.99, categoria: "laptops",     stock: 5, hijos : {
    nombre : "Edward",
    apellido : "Carlos",
    dni: 34343434,
    envio: {costo: 10}
  } },
  { nombre: "iPhone 13 Pro",  precio: 1099.99, categoria: "smartphones", stock: 8 },
  { nombre: "iPad Mini",      precio: 499.99,  categoria: "tablets",     stock: 0 },
  { nombre: "AirPods Max",    precio: 549.99,  categoria: "audio",       stock: 3 },
]

// Ejercicio 3 de la Clase 7: agregar un quinto producto y leer el catálogo.
productos.push({ nombre: "Apple Watch", precio: 399.99, categoria: "audio", stock: 6 });
//COPIA LA LISAT DE PRODUCTOS Y PEGALA EN COPIA

const magicMouse = {
  nombre : "Magic Mouse",
  precio: 79.99,
  categoria : "accesorios",
  stock : 12
};
const copia = [...productos];
// copia.push(magicMouse);

const copiaConNuevo = [magicMouse, ...productos, magicMouse];
console.log(productos.length);
console.log(copiaConNuevo.length);

const laptops = productos.filter(p => p.categoria === "laptops");
const audio = productos.filter(p => p.categoria === "audio");
const seleccionados = [...laptops, ...audio];
// console.log(seleccionados);
// console.log(productos);

const porPrecio = [...productos].sort((a,b) => a.precio - b.precio);
// console.log(porPrecio);

const rebajado = {...productos[0], hijos: {
  nombre : "edward",
}};
console.log(productos[0]);
console.log(rebajado);