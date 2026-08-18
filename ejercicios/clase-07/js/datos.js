export const productosPrueba = [
    {
        nombre: "Macbook Pro 14",
        precio: 1999.99,
        categoria: "laptops",
        stock: 5
    },
    {
        nombre: "Iphone 13 Pro",
        precio: 1099.99,
        categoria: "smartphones",
        stock: 8
    },
    {
        nombre: "Ipad Mini",
        precio: 499.99,
        categoria: "tablets",
        stock: 0
    },
    {
        nombre: "Airpods Max",
        precio: 549.99,
        categoria: "audio",
        stock: 3
    },
    {
        nombre: "Samsung Galaxy S24",
        precio: 899.99,
        categoria: "smartphones",
        stock: 12
    },
    {
        nombre: "Dell XPS 15",
        precio: 1799.99,
        categoria: "laptops",
        stock: 4
    },
    {
        nombre: "Samsung Galaxy Tab S9",
        precio: 749.99,
        categoria: "tablets",
        stock: 6
    },
    {
        nombre: "Sony WH-1000XM5",
        precio: 399.99,
        categoria: "audio",
        stock: 10
    },
    {
        nombre: "Lenovo ThinkPad X1",
        precio: 1599.99,
        categoria: "laptops",
        stock: 2
    },
    {
        nombre: "Google Pixel 8",
        precio: 699.99,
        categoria: "smartphones",
        stock: 7
    },
    {
        nombre: "Ipad Air",
        precio: 699.99,
        categoria: "tablets",
        stock: 0
    },
    {
        nombre: "JBL Charge 5",
        precio: 179.99,
        categoria: "audio",
        stock: 15
    }
];


/*
// impriman el tercer producto solo su nombre
console.log(productos[2].nombre);
// ver cuantos productos hay 
console.log(productos.length);

console.log("USO DE MAP \n");
const nombres = productos.map(producto => producto.nombre);
const conIGV = productos.map(producto => producto.precio * 1.18);
console.log(nombres);
console.log(conIGV);

const caros = productos.filter( producto => producto.precio > 1000);
const stock = productos.filter(producto => producto.stock > 0);
const productoFiltrado = productos.filter(producto => producto.stock > 4).map(producto => producto.nombre);
console.table(caros);
console.table(stock);
console.log(productoFiltrado);

const total = productos.reduce((suma, producto) => suma + producto.precio, 0);
console.log("Total : " + total);

const enOferta = productos
                    .filter(producto => producto.precio < 600)
                    .map(producto => producto.nombre);

const inventarioPrecio = productos
                    .reduce((suma, producto) => suma + producto.precio * producto.stock,0);

console.log(enOferta);
console.log(inventarioPrecio);
*/