import { productosPrueba,muebles } from "./productos.js";
import { conDescuento,resumen } from "./promociones.js";

/*Ejercicio 2 (intermedio) · El descuento sin daños

**Practica:** clase 08 (desestructuración, spread, template literals, módulos).

**Contexto.** Aplicar un descuento parece fácil hasta que descubres que modificaste el
producto original y ahora TODA la tienda muestra el precio rebajado. Este ejercicio es sobre
copiar bien.

**Lo que debes construir:**
*/

//1. Dos archivos módulo: `productos.js` (exporta el array) y `promociones.js` (exporta la
//   lógica). Un `main.js` los importa y ejecuta.


//2. En `promociones.js`, una función `conDescuento(producto, porcentaje)` que devuelve un
//   producto NUEVO con el precio rebajado y un campo extra `precioOriginal`, usando spread.
//   El producto original no se toca.

console.log(conDescuento(productosPrueba[0],10))

//3. Una función `resumen(producto)` que use desestructuración con renombre y valor por defecto
//  en sus parámetros (por ejemplo `{ nombre, precio, marca = 'Genérica' }`) y devuelva un
//   texto multilínea con template literal: nombre, marca y precio formateado.
console.log(resumen(productosPrueba[2]))

//4. Una función `combinar(...listas)` con parámetro rest que reciba varios arrays de productos
//   y devuelva uno solo (spread para unirlos).
console.log (productosPrueba)
console.log(productosPrueba,muebles)

/***Criterios de aceptación:**

- [ ] Después de aplicar `conDescuento`, el producto original conserva su precio (demuéstralo
      con dos `console.log`).
- [ ] Los tres archivos usan `import`/`export` de módulos ES (recuerda: `type="module"` y
      Live Server).
- [ ] `combinar` funciona con 2, 3 o más listas sin cambiar el código.

**Pistas:** `{ ...producto, precio: nuevoPrecio }` copia y pisa en un solo paso; el orden del
spread decide qué campo gana.

---*/