import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { productos } from "./datos";
import type { EstadoCarga } from "./tipos";

const STORAGE_KEY = "techcart-carrito-abierto";

export default function App() {
  const estado: EstadoCarga = "listo";
  const [carritoAbierto, setCarritoAbierto] = useState<boolean>(() => {
    const valor = localStorage.getItem(STORAGE_KEY);
    if (valor === null) {
      return false;
    }

    const parsed = valor === "true";
    return typeof parsed === "boolean" ? parsed : false;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(carritoAbierto));
  }, [carritoAbierto]);

  useEffect(() => {
    document.title = carritoAbierto
      ? "TechCart | Carrito abierto"
      : "TechCart | Catálogo";
  }, [carritoAbierto]);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <Header
        nombre="TechCart"
        eslogan="Ofertas de agosto"
        carritoAbierto={carritoAbierto}
        onToggleCarrito={() => setCarritoAbierto((actual) => !actual)}
      />

      {estado === "listo" && (
        <section className="flex flex-wrap gap-4">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </section>
      )}

      <Footer />
    </main>
  );
}
