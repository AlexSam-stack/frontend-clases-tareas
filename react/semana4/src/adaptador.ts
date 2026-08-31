import type { Producto, ProductoApi } from "./tipos";

export function adaptarProductoApi(productoApi: ProductoApi): Producto {
  return {
    id: productoApi.id,
    nombre: productoApi.title,
    marca: productoApi.brand,
    precio: productoApi.price,
    imagen: productoApi.thumbnail,
    stock: productoApi.stock,
    descripcion: productoApi.description,
  };
}
