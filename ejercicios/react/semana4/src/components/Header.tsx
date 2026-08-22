interface Props {
    nombre: string;
    eslogan?: string;
    carritoAbierto: boolean;
    onToggleCarrito: () => void;
}

export default function Header({
    nombre,
    eslogan = 'Tecnología para todos',
    carritoAbierto,
    onToggleCarrito,
}: Props) {
    return (
        <header className="mb-6 flex items-center justify-between gap-4 border-b pb-4">
            <div>
                <h1 className="text-3xl font-bold">{nombre}</h1>
                <p className="text-sm text-gray-500">{eslogan}</p>
            </div>

            <button
                type="button"
                onClick={onToggleCarrito}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
                aria-label={carritoAbierto ? 'Cerrar carrito' : 'Abrir carrito'}
            >
                🛒 {carritoAbierto ? 'Carrito abierto' : '0 productos'}
            </button>
        </header>
    );
}

