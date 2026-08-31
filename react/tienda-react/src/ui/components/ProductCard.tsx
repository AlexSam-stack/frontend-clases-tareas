import { Link } from "react-router-dom";
import formatearPrecio from "../formato";
import type { Producto } from "../../dominio/tipos";
import EtiquetaStock from "./EtiquetaStock";
import { useCart } from "../../aplicacion/useCart";
import { memo } from "react";
import { useFavorito } from "../../aplicacion/useFavorito";
import { useColeccion } from "../../aplicacion/useColeccion";

interface Props {
  producto: Producto;
}

function ProductCard({ producto }: Props) {
  const { agregar } = useCart();

  const { esFavorito, ontogle } = useFavorito();

  // 👇 Colección
  const { agregar: agregarColeccion , esEnColeccion,quitar} = useColeccion();

  const agotado = producto.stock === 0;
  const favorito = esFavorito(producto.id);

  return (
    <article
      className={`relative w-64 rounded-xl border p-4 ${
        agotado ? "opacity-50" : ""
      }`}
    >
      {/* ❤️ Favoritos */}
      <button
        type="button"
        onClick={() => ontogle(producto)}
        className="absolute right-3 top-3 text-2xl"
        aria-label={
          favorito
            ? "Quitar de favoritos"
            : "Agregar a favoritos"
        }
      >
        {favorito ? "❤️" : "♡"}
      </button>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="mb-3 aspect-square object-contain"
      />

      <p className="text-sm text-gray-500">
        {producto.marca}
      </p>

      <h2 className="font-semibold">
        <Link
          to={`/producto/${producto.id}`}
          className="hover:underline"
        >
          {producto.nombre}
        </Link>
      </h2>

      {/* Calificación */}
      <p className="text-sm text-yellow-500">
        ⭐ {producto.calificacion}
      </p>

      <EtiquetaStock stock={producto.stock} />

      <p className="mt-2">
        {formatearPrecio(producto.precio * 1.18)} con IGV
      </p>

      {/* 🛒 Carrito */}
      <button
        className="mt-3 w-full rounded-full border px-4 py-1 text-sm"
        onClick={() => agregar(producto)}
        disabled={producto.stock === 0}
      >
        {producto.stock === 0
          ? "Agotado"
          : "Agregar al carrito"}
      </button>

      {/* 📚 Colección */}
      <button
  type="button"
  onClick={() =>
    esEnColeccion(producto.id)
      ? quitar(producto.id)
      : agregarColeccion(producto)
  }
  className={`mt-2 w-full rounded-full border px-4 py-1 text-sm ${
    esEnColeccion(producto.id)
      ? "bg-red-50 text-red-600 hover:bg-red-100"
      : "hover:bg-gray-100"
  }`}
>
  {esEnColeccion(producto.id)
    ? "❌ Quitar de mi colección"
    : "📚 Agregar a mi colección"}
</button>
    </article>
  );
}

export default memo(ProductCard);