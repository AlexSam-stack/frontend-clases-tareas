
//1. Dos archivos módulo: `productos.js` (exporta el array) y `promociones.js` (exporta la
//   lógica). Un `main.js` los importa y ejecuta.
console.log("cumplido")

//2. En `promociones.js`, una función `conDescuento(producto, porcentaje)` que devuelve un
//   producto NUEVO con el precio rebajado y un campo extra `precioOriginal`, usando spread.
//   El producto original no se toca.
export const conDescuento =(producto,porcentaje)=>(
     {
        ...producto,
        precio: producto.precio*(1-porcentaje/100),
        precioOriginal : producto.precio
    }
)
//3. Una función `resumen(producto)` que use desestructuración con renombre y valor por defecto
//   en sus parámetros (por ejemplo `{ nombre, precio, marca = 'Genérica' }`) y devuelva un
//   texto multilínea con template literal: nombre, marca y precio formateado.

export const resumen = ({nombre, precio, marca = "Sin Registrar"})=> `el ${nombre} de  precio (S/. ${precio}) es de la marca: ${marca}`


//4. Una función `combinar(...listas)` con parámetro rest que reciba varios arrays de productos
//   y devuelva uno solo (spread para unirlos).
const combinar = (...listas) => {
    return listas.reduce((resultado, lista) => [
        ...resultado,
        ...lista
    ], []);
};