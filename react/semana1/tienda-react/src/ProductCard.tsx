import type { Producto } from './tipos'
import { formatearPrecio } from './formato'

type ProductCardProps = {
  producto: Producto
}

export function ProductCard({ producto }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-lg shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
      <div className="relative">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-sm">
          {producto.marca}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-slate-700 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300">
            {producto.categoria}
          </span>
          <span className="text-sm font-medium text-amber-300">★ {producto.rating}</span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{producto.nombre}</h3>
          {producto.descripcion ? (
            <p className="mt-2 text-sm leading-6 text-slate-300">{producto.descripcion}</p>
          ) : (
            <p className="mt-2 text-sm leading-6 text-slate-400">Producto pensado para equiparte con mejor rendimiento.</p>
          )}
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-bold text-cyan-300">{formatearPrecio(producto.precio)}</p>
            {producto.precioOriginal ? (
              <p className="text-sm text-slate-400 line-through">{formatearPrecio(producto.precioOriginal)}</p>
            ) : null}
          </div>

          <button className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Añadir
          </button>
        </div>
      </div>
    </article>
  )
}
