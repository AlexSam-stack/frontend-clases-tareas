import type { Producto } from "./tipos";


export function agregarFavorito(
    favoritos: Producto[],
    producto: Producto
): Producto[] {

    const existe = favoritos.some(
        (p) => p.id === producto.id
    );

    if (existe) {
        return favoritos;
    }

    return [...favoritos, producto];
}



export function quitarFavorito(
    favoritos: Producto[],
    id: number
): Producto[] {

    return favoritos.filter(
        (p) => p.id !== id
    );
}

export function toggleFavorito( favoritos: Producto[], producto: Producto ): Producto[] 
{ const existe = favoritos.some( (p) => p.id === producto.id );
     if (existe) { 
        return quitarFavorito(favoritos, producto.id); 

     } return agregarFavorito(favoritos, producto); 
}