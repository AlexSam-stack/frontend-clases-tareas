import type { Producto } from "./tipos";


export function agregarColeccion(
    coleccion: Producto[],
    producto: Producto
): Producto[] {
    return [...coleccion, producto];
}



export function quitarFavorito(
    coleccion: Producto[],
    id: number
): Producto[] {

    return coleccion.filter(
        (p) => p.id !== id
    );
}