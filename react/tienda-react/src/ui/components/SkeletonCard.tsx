

// Clase 5-ejercicio facil 
export default function SkeletonCard() {
    return (
        <article
            className="w-64 animate-pulse motion-reduce:animate-none rounded-xl border p-4"
            aria-hidden="true"
        >
            {/* Imagen */}
            <div className="mb-3 aspect-square rounded bg-gray-200"></div>

            {/* Marca */}
            <div className="mb-2 h-4 w-1/3 rounded bg-gray-200"></div>

            {/* Nombre */}
            <div className="mb-2 h-5 w-3/4 rounded bg-gray-200"></div>

            {/* Stock */}
            <div className="mb-2 h-4 w-1/2 rounded bg-gray-200"></div>

            {/* Precio */}
            <div className="mt-2 h-4 w-1/3 rounded bg-gray-200"></div>

            {/*calificacion */}
            <div className="mt-2 h-4 w-1/3 rounded bg-gray-200"></div>

            {/* Botón */}
            <div className="mt-3 h-8 w-32 rounded-full bg-gray-200"></div>


        </article>
    );
}