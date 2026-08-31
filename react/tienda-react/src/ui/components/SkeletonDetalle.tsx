export default function SkeletonDetalle() {
    return (
        <article className="flex flex-wrap gap-8 p-6 motion-reduce:animate-none">
            
            {/* Imagen */}
            <div className="h-72 w-72 rounded-xl bg-gray-200" />

            {/* Información */}
            <div className="w-72 space-y-4">
                <div className="h-4 w-1/3 rounded bg-gray-200" />

                <div className="h-8 w-3/4 rounded bg-gray-200" />

                <div className="h-4 w-1/4 rounded bg-gray-200" />

                <div className="h-6 w-1/3 rounded bg-gray-200" />

                <div className="h-10 w-40 rounded-full bg-gray-200" />
            </div>

        </article>
    );
}