import { Link } from "react-router-dom";
import { useFavorito } from "../../aplicacion/useFavorito";

export default function PanelFavorito() {
    const {
        productosFavoritos,
        quitar,
        vacia
    } = useFavorito();

    return (
        <section className="mb-6 rounded-2xl border bg-white p-5 shadow-sm">

            {/* Encabezado */}
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">
                        Mis favoritos ❤️
                    </h2>

                    <p className="text-sm text-gray-500">
                        {productosFavoritos.length === 0
                            ? "Todavía no tienes favoritos"
                            : `${productosFavoritos.length} producto${
                                productosFavoritos.length !== 1 ? "s" : ""
                            } guardado${
                                productosFavoritos.length !== 1 ? "s" : ""
                            }`
                        }
                    </p>
                </div>

                {productosFavoritos.length > 0 && (
                    <button
                        onClick={vacia}
                        className="text-sm text-gray-500 underline hover:text-red-500"
                    >
                        Vaciar favoritos
                    </button>
                )}
            </div>

            {/* Estado vacío */}
            {productosFavoritos.length === 0 && (
                <div className="rounded-xl bg-gray-50 p-6 text-center">
                    <div className="mb-2 text-4xl">
                        ♡
                    </div>

                    <p className="font-medium text-gray-700">
                        No tienes productos favoritos
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        Presiona el corazón ❤️ en un producto para guardarlo.
                    </p>
                </div>
            )}

            {/* Lista de favoritos */}
            {productosFavoritos.length > 0 && (
                <ul className="space-y-3">
                    {productosFavoritos.map((producto) => (
                        <li
                            key={producto.id}
                            className="flex items-center gap-4 rounded-xl border p-3 transition hover:shadow-sm"
                        >
                            {/* Imagen */}
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="h-16 w-16 rounded-lg object-contain"
                            />

                            {/* Información */}
                            <div className="min-w-0 flex-1">
                                <Link
                                    to={`/producto/${producto.id}`}
                                    className="font-semibold hover:underline"
                                >
                                    {producto.nombre}
                                </Link>

                                <p className="text-sm text-gray-500">
                                    {producto.marca}
                                </p>

                                <p className="text-sm font-medium">
                                    S/ {producto.precio.toFixed(2)}
                                </p>
                            </div>

                            {/* Eliminar */}
                            <button
                                type="button"
                                onClick={() => quitar(producto.id)}
                                aria-label={`Quitar ${producto.nombre} de favoritos`}
                                className="rounded-full px-3 py-2 text-lg text-red-500 hover:bg-red-50"
                            >
                                ❤️
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

