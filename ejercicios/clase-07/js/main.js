import { productosPrueba } from "./datos.js";

const productos = [

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
productos.push({
    nombre: "Apple Watch",
    precio: 399.99,
    categoria : "audio",
    stock : 6
});

// ejercicios
/*## Ejercicio 1 (intermedio) · El reporte de inventario

**Practica:** clase 07 (arrays, funciones flecha, map, filter, reduce).

**Contexto.** Todo comercio necesita reportes, y todos los reportes son transformaciones de un
array. Este ejercicio es map, filter y reduce puros, sin DOM: la respuesta se imprime en la
consola.

**Lo que debes construir.** Partiendo del array de productos de tu `datos.js` (o uno propio de
al menos 8 productos con `nombre`, `precio`, `stock` y `categoria`), escribe estas funciones,
todas flecha y todas puras (reciben el array, devuelven el resultado, no modifican nada):
*/


//1. `unidadesTotales(productos)`: la suma de todo el stock (reduce).
const unidadesTotales = (productos)=>[...productos].reduce((sumaStock,{stock})=>sumaStock+stock,0);
console.log(unidadesTotales(productosPrueba));
console.log(productosPrueba);

//2. `valorInventario(productos)`: la suma de precio por stock de cada producto (reduce).
const valorInventario = (productos)=>[...productos].reduce((sumaTotal,{stock,precio})=>sumaTotal+precio*stock,0);
console.log(valorInventario(productosPrueba).toFixed(2));


//3. `masCaro(productos)`: el producto de mayor precio (reduce comparando).
const masCaro=(productos)=>[...productos].reduce((masCaro,producto)=>masCaro.precio >producto.precio? masCaro : producto,productosPrueba[0]);
console.log(masCaro(productosPrueba));

//4. `bajoStock(productos, umbral)`: los productos con stock menor al umbral (filter).
const bajoStock =(productos, umbral)=>[...productos].filter(({stock},umbral)=>stock<umbral);

console.log(bajoStock(productosPrueba,2));

//5. `etiquetas(productos)`: un array de textos con el formato `"Laptop X (S/ 3499)"` (map con
//   template literal).
const etiquetas=(productos)=>[...productos].map(({nombre,precio})=>`${nombre} X (S/ ${precio.toFixed(2)})`)
console.log(etiquetas(productosPrueba))

/*Imprime los cinco resultados con `console.log` y una etiqueta clara cada uno.


**Criterios de aceptación:**

- [ ] Cero bucles `for` o `while`: todo con métodos de array.
- [ ] Ninguna función modifica el array original (compruébalo imprimiéndolo antes y después).
- [ ] `bajoStock` funciona con cualquier umbral que le pases.

**Pistas:** el reduce de `masCaro` lleva como acumulador un producto, no un número; si un
método te devuelve array y necesitas otro paso, encadénalos.

---*/
