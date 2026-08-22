import { useState } from "react";
import formatearPrecio from "../formato";
import type { Producto } from "../tipos";
import EtiquetaStock from "./EtiquetaStock";

interface Props {
  producto: Producto;
}

export default function ProductCard({ producto }: Props) {
  const [contador, setContador] = useState(0);
  const agotado = producto.stock === 0;

  return (
    <article className={`w-64 rounded-xl border p-4 ${agotado ? 'opacity-50' : ''}`}>
      <img src={producto.imagen} alt={producto.nombre} className="mb-3 aspect-square object-contain" />
      <p className="text-sm text-gray-500">{producto.marca}</p>
      <h2 className="font-semibold">{producto.nombre}</h2>
      {producto.descripcion && (
        <p className="mt-2 text-sm text-gray-600">{producto.descripcion}</p>
      )}
      <EtiquetaStock stock={producto.stock} />
      <p className="mt-2">{formatearPrecio(producto.precio * 1.18)} con IGV</p>
      <button
        type="button"
        onClick={() => setContador((actual) => actual + 1)}
        disabled={agotado}
        className="mt-3 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Agregar · {contador}
      </button>
    </article>
  );
}