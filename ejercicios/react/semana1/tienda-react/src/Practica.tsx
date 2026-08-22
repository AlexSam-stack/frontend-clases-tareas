import { useState } from 'react'

export function Practica() {
  const [contador, setContador] = useState(0)

  return (
    <section className="mt-12 rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-6 shadow-xl shadow-cyan-900/20">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Práctica de React</p>
      <h2 className="mt-3 text-3xl font-bold text-white">Contador con useState</h2>

      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setContador((valorActual) => valorActual - 1)}
          className="rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-xl font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          aria-label="Disminuir contador"
        >
          −
        </button>

        <span className="min-w-16 text-center text-4xl font-black text-cyan-300">{contador}</span>

        <button
          type="button"
          onClick={() => setContador((valorActual) => valorActual + 1)}
          className="rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-xl font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          aria-label="Aumentar contador"
        >
          +
        </button>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-300">
        useState guarda un valor del componente y vuelve a renderizar la interfaz cuando ese valor cambia.
        Aquí el contador se actualiza con una función de estado y React vuelve a pintar la pantalla con el valor nuevo.
      </p>
    </section>
  )
}
