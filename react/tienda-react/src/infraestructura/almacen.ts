import type { ItemCarrito, Producto, Usuario } from "../dominio/tipos";

const CLAVE_CARRITO = 'tienda_carrito';
const CLAVE_SESION = 'tienda_sesion';
const CLAVE_FAVORITO = "tienda_favorito";
const CLAVE_COLECCION="tienda_coleccion"

export function leerSesion(): Usuario | null {
    try {
        const guardado =
            localStorage.getItem(CLAVE_SESION) ??
            sessionStorage.getItem(CLAVE_SESION);

        if (!guardado) {
            return null;
        }

        const crudo: unknown = JSON.parse(guardado);

        if (
            typeof crudo === "object" &&
            crudo !== null &&
            typeof (crudo as Usuario).token === "string" &&
            typeof (crudo as Usuario).expiraEn === "number"
        ) {
            return crudo as Usuario;
        }

        return null;

    } catch {
        return null;
    }
}
export function guardarSesion(usuario : Usuario, recordar : boolean) {
    const storage = recordar
        ? localStorage
        : sessionStorage;
    try{
        storage.setItem(CLAVE_SESION, JSON.stringify(usuario));
    }catch (error) {
        console.warn('No se puede guardar la sesion: ', error instanceof Error ? error.message : error);
    }
}

export function borrarSesion() {
    localStorage.removeItem(CLAVE_SESION);
}


export function leerCarrito() : ItemCarrito[] {
      try{
        const crudo : unknown = JSON.parse(localStorage.getItem(CLAVE_CARRITO) ?? '[]');
        return Array.isArray(crudo) ? (crudo as ItemCarrito[]) : [];
      }catch{
        return []
      }
}
export function guardarCarrito(items : ItemCarrito[]) {
    try{
          localStorage.setItem(CLAVE_CARRITO, JSON.stringify(items));
    }catch (error) {
        console.warn('No se pudo guardar el carrito', error instanceof Error ? error.message : error);
    }
}


export function leerFavoritos() : Producto[] {
      try{
        const crudo : unknown = JSON.parse(localStorage.getItem(CLAVE_FAVORITO) ?? '[]');
        return Array.isArray(crudo) ? (crudo as Producto[]) : [];
      }catch{
        return []
      }
}

export function guardarFavorito(items : Producto[]) {
    try{
          localStorage.setItem(CLAVE_FAVORITO, JSON.stringify(items));
    }catch (error) {
        console.warn('No se pudo guardar los favoritos', error instanceof Error ? error.message : error);
    }
}

export function leerColeccion() : Producto[] {
      try{
        const crudo : unknown = JSON.parse(localStorage.getItem(CLAVE_COLECCION) ?? '[]');
        return Array.isArray(crudo) ? (crudo as Producto[]) : [];
      }catch{
        return []
      }
}

export function guardarColeccion(items : Producto[]) {
    try{
          localStorage.setItem(CLAVE_COLECCION, JSON.stringify(items));
    }catch (error) {
        console.warn('No se pudo guardar los favoritos', error instanceof Error ? error.message : error);
    }
}