// main.js — orquesta: pide los datos, escucha los eventos y manda a pintar.
//
// Este es el PUNTO DE PARTIDA de la Clase 10: es exactamente donde quedó la Clase 9.
// El catálogo ya se pinta desde el array y los botones ya responden al clic, pero el
// carrito solo se ve en la consola.
//
// Lo que falta y se hace EN CLASE:
//   1. que el carrito se VEA en la página (estado → render)
//   2. localStorage: que sobreviva al refresco
//   3. la lista del carrito y quitar productos
//   4. fetch: traer los productos de verdad desde una API (y async/await, errores)
import { productos } from "./datos.js"
import { resumenCarrito } from "./carrito.js"
import formatearPrecio from "./formato.js"
import { tarjetaProducto } from "./ui.js"

const contenedor = document.querySelector(".productos")
const resumenEl = document.querySelector("#resumen-carrito")
const listaCarrito = document.querySelector("#lista-carrito")
const totalCarrito = document.querySelector("#total-carrito")
const compararBtn = document.querySelector("#comparar")
const resultadoComparar = document.querySelector("#resultado-comparar")

// localStorage key
const KEY = "techcart_carrito_v1"

const cargarCarrito = () => {
   try {
      const raw = localStorage.getItem(KEY)
      return raw ? JSON.parse(raw) : []
   } catch (e) {
      console.warn("Carrito en localStorage inválido, empiezo vacío", e)
      return []
   }
}

let carrito = cargarCarrito()

const guardarCarrito = () => {
   try {
      localStorage.setItem(KEY, JSON.stringify(carrito))
   } catch (e) {
      console.warn("No se pudo guardar carrito:", e)
   }
}

// Pinta el catálogo
const pintarCatalogo = () => {
   if (!contenedor) return
   contenedor.innerHTML = productos.map(tarjetaProducto).join("")
}

// Pinta el carrito (Clase 10: sin cantidades)
const pintarCarrito = () => {
   const { cantidad, subtotal, total } = resumenCarrito(carrito)

   if (resumenEl) resumenEl.textContent = `🛒 ${cantidad} productos · ${formatearPrecio(total)}`

   if (listaCarrito) {
      listaCarrito.innerHTML = carrito.map((p, i) => `
         <li class="flex justify-between items-center border-b border-borde py-2">
            <span>${p.nombre}</span>
            <span class="flex gap-3 items-center">
               <strong class="text-precio">${formatearPrecio(p.precio)}</strong>
               <button type="button" class="btn" data-accion="quitar" data-id="${p.id}">Quitar</button>
            </span>
         </li>
      `).join("")
   }

   if (totalCarrito) {
      totalCarrito.textContent = cantidad === 0
         ? "Tu carrito está vacío."
         : `Subtotal: ${formatearPrecio(subtotal)} · IGV incluido · Total: ${formatearPrecio(total)}`
   }
}

// Delegación para agregar al carrito
if (contenedor) {
   contenedor.addEventListener("click", (evento) => {
      const boton = evento.target.closest("button[data-accion='agregar']")
      if (!boton) return

      const id = Number(boton.dataset.id)
      const producto = productos.find(p => p.id === id)
      if (!producto) return

      carrito = [...carrito, producto]
      guardarCarrito()
      pintarCarrito()
   })
}

// Delegación para quitar del carrito
if (listaCarrito) {
   listaCarrito.addEventListener("click", (evento) => {
      const boton = evento.target.closest("button[data-accion='quitar']")
      if (!boton) return

      const id = Number(boton.dataset.id)
      // quitar la PRIMERA aparición con ese id
      const idx = carrito.findIndex(p => p.id === id)
      if (idx === -1) return
      carrito = [...carrito.slice(0, idx), ...carrito.slice(idx + 1)]
      guardarCarrito()
      pintarCarrito()
   })
}

// Comparador: pide las dos categorías en paralelo y muestra promedios
const formateador = new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" })
const compararCategorias = async () => {
   if (!resultadoComparar) return
   resultadoComparar.textContent = "Cargando…"

   const urls = [
      "https://dummyjson.com/products/category/laptops",
      "https://dummyjson.com/products/category/smartphones"
   ]

   try {
      const respuestas = await Promise.all(urls.map(u => fetch(u)))
      const datos = await Promise.all(respuestas.map(r => {
         if (!r.ok) throw new Error(`HTTP ${r.status}`)
         return r.json()
      }))

      const [lap, tel] = datos
      const avg = arr => arr.products.reduce((s, p) => s + p.price, 0) / arr.products.length
      const avgLap = avg(lap)
      const avgTel = avg(tel)
      const diff = Math.abs(avgLap - avgTel)

      const másCara = avgLap > avgTel ? "Laptops" : "Smartphones"
      resultadoComparar.innerHTML = `
         <div>Promedio Laptops: ${formateador.format(avgLap)}</div>
         <div>Promedio Smartphones: ${formateador.format(avgTel)}</div>
         <div><strong>${másCara} son más caras por ${formateador.format(diff)}</strong></div>
      `
   } catch (e) {
      console.warn("Error comparando categorías:", e)
      resultadoComparar.innerHTML = `
         <div>Error al comparar: ${e.message}</div>
         <button id="reintentar" class="btn">Reintentar</button>
      `
      const retry = document.querySelector("#reintentar")
      if (retry) retry.addEventListener("click", compararCategorias)
   }
}

if (compararBtn) compararBtn.addEventListener("click", compararCategorias)

// Inicializar
pintarCatalogo()
pintarCarrito()




/*
## Ejercicio 4 (intermedio) · El comparador de categorías

**Practica:** clase 10 (fetch, promesas, async/await, Promise.all, manejo de errores).

**Contexto.** Una pregunta de negocio real: ¿qué categoría es más cara en promedio? Para
responderla hay que pedir dos categorías a la API, en paralelo, y sobrevivir si la red falla.

**Lo que debes construir:**

1. Una página con un botón "Comparar" y una zona de resultado con sus tres estados: cargando,
   error y listo.
2. Al hacer clic, pide DOS categorías de DummyJSON **en paralelo** con `Promise.all`:
   `https://dummyjson.com/products/category/laptops` y `.../smartphones`.
3. Con los resultados, calcula el precio promedio de cada categoría (reduce dividido entre la
   cantidad) y muestra cuál es más cara y por cuánto.
4. Si la red falla, la zona de resultado muestra un mensaje claro con un botón de reintento.
   Nada de `catch` vacío: siempre un `console.warn` con contexto o un mensaje en pantalla.

**Criterios de aceptación:**

- [ ] En la pestaña Network se ven las dos peticiones salir JUNTAS, no una después de la otra.
- [ ] Con DevTools en Offline, aparece el mensaje de error y el reintento funciona al volver
      la conexión.
- [ ] El resultado muestra los dos promedios formateados con `Intl.NumberFormat` y la
      diferencia.

**Pistas:** `async/await` dentro de una función, nunca suelto; `Promise.all` recibe un array
de promesas y devuelve un array de resultados en el mismo orden.

---
*/
