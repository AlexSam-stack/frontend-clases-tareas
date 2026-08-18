/*## Ejercicio 3 (intermedio) · La lista de deseos

**Practica:** clase 09 (DOM, eventos con delegación, localStorage).

**Contexto.** Toda tienda tiene el corazón de "me gusta". El reto real no es el corazón: es
escuchar cuarenta corazones con UN solo listener, y que la lista sobreviva al F5.

**Lo que debes construir:**
*/

//1. Una página con tu catálogo pintado desde el array por JavaScript (como en la clase), y en
//   cada tarjeta un botón de deseo con el `id` del producto en un `data-id`.
//2. UN solo `addEventListener` en el contenedor del catálogo (delegación) que detecte el clic
//   en cualquier botón de deseo y agregue o quite ese producto de la lista de deseos.
//3. Un contador en el encabezado ("Deseos: 3") que se actualice en cada cambio
//4. La lista de deseos persistida en `localStorage` (guardar en cada cambio, leer al cargar),
//   siempre dentro de `try/catch`.
//5. Los botones reflejan el estado: corazón lleno si el producto está en deseos, vacío si no,
//   incluso después de recargar.
/*
**Criterios de aceptación:**

- [ ] Hay exactamente UN `addEventListener` de clic para todos los corazones.
- [ ] F5 conserva los deseos y los corazones pintados correctamente.
- [ ] Si el valor guardado en localStorage está corrupto (edítalo a mano para probar), la
      página carga con lista vacía en lugar de romperse.
- [ ] Ningún texto que venga de datos se inserta sin escapar (tu `escaparTexto` de la clase).

**Pistas:** `evento.target.closest('button')` encuentra el botón aunque el clic caiga en el
ícono; guarda solo los ids en localStorage, no los productos completos.

---
*/

import { productos } from "./datos.js"
import formatearPrecio from "./formato.js"

const contenedor = document.querySelector(".productos")
const contadorDeseosEl = document.querySelector(".contador-deseos")

const KEY = "techcart_deseos_v1"
const escaparTexto = (texto) => {
  const div = document.createElement("div")
  div.textContent = texto
  return div.innerHTML
}

const cargarDeseos = () => {
  try {
    const raw = localStorage.getItem(KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch (e) {
    console.warn(" inicializando vacío...", e)
    return []
  }
}

let deseos = cargarDeseos()

const guardarDeseos = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify(deseos))
  } catch (e) {
    console.warn("No se pudo guardar", e)
  }
}

const pintarContador = () => {
  if (contadorDeseosEl) contadorDeseosEl.textContent = deseos.length
}

const tarjeta = ({ id, nombre, precio, stock, imagen }) => {
  const isDeseado = deseos.includes(id)
  return `
  <article class="card group" data-id="${id}">
    <figure class="w-full overflow-hidden rounded-lg m-0">
      ${imagen
        ? `<img src="${imagen}" alt="${escaparTexto(nombre)}" class="w-full aspect-square object-contain transition group-hover:scale-105" />`
        : `<div class="w-full aspect-square grid place-items-center text-5xl">📦</div>`}
    </figure>
    <h3 class="text-base font-semibold mt-2 mb-1">${escaparTexto(nombre)}</h3>
    <p class="m-0"><strong class="text-precio text-lg font-bold">${formatearPrecio(precio)}</strong></p>
    <button type="button" class="btn mt-2  " data-accion="Deseo" data-id="${id}" ${stock === 0 ? "disabled" : ""} aria-pressed="${isDeseado}">
      ${isDeseado ? '❤️ Deseado' : '🤍 Deseo'}
    </button>
  </article>
  `
}

const pintarCatalogo = () => {
  if (!contenedor) return
  contenedor.innerHTML = productos.map(tarjeta).join("")
  pintarContador()
}

if (!contenedor) {
  console.warn("No se encontró el contenedor .productos — asegúrate de que el HTML incluye <div class='productos'>")
} else {
  contenedor.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button[data-accion='Deseo']")
  if (!boton) return

  const id = Number(boton.dataset.id)
  if (Number.isNaN(id)) return

  const existe = deseos.includes(id)
  if (existe) {
    deseos = deseos.filter(i => i !== id)
  } else {
    deseos = [...deseos, id]
  }

  guardarDeseos()
  pintarCatalogo()
  })


  pintarCatalogo()
}


