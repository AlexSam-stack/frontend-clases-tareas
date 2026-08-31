import { Link } from "react-router-dom";
import { leerPedidosHistorial } from "../../infraestructura/pedidos";

export default function Pedidos() {
    const pedidos = leerPedidosHistorial();
    
    if (pedidos.length === 0) {
        return (
            <section className="p-6">
                <h1 className="mb-4 text-2xl font-bold">
                    Mis pedidos
                </h1>

                <p className="text-gray-500">
                    No tienes pedidos todavía.
                </p>

                <Link
                    to="/"
                    className="mt-4 inline-block underline"
                >
                    Ir al catálogo
                </Link>
            </section>
        );
    }

    return (
        <section className="p-6">
            <h1 className="mb-6 text-2xl font-bold">
                Mis pedidos
            </h1>

            <div className="space-y-6">
                {pedidos.map((pedido) => (
                    <article
                        key={pedido.id}
                        className="rounded-xl border p-4"
                    >
                        <div className="mb-4">
                            <h2 className="font-semibold">
                                Pedido #{pedido.id}
                            </h2>

                            <p className="text-sm text-gray-500">
                                Fecha:{" "}
                                {new Date(pedido.fecha).toLocaleDateString()}
                            </p>
                        </div>

                        <h3 className="mb-2 font-medium">
                            Productos
                        </h3>

                        <ul className="space-y-2">
                            {pedido.items.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex justify-between text-sm"
                                >
                                    <span>
                                        {item.nombre} x {item.cantidad}
                                    </span>

                                    <span>
                                        S/{" "}
                                        {(item.precio * item.cantidad).toFixed(2)}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 border-t pt-3 text-right font-semibold">
                            Total: S/ {pedido.total.toFixed(2)}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

