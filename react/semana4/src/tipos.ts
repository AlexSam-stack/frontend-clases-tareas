export interface ProductoApi {
    id: number;
    title: string;
    brand: string;
    price: number;
    thumbnail: string;
    stock: number;
    description?: string;
}

export interface Producto {
    id: number;
    nombre: string;
    marca: string;
    precio: number;
    imagen: string;
    stock: number;
    descripcion?: string;
}

export type EstadoCarga = 'cargando' | 'listo' | 'error';