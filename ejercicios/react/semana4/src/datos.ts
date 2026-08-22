import { adaptarProductoApi } from "./adaptador";
import type { ProductoApi } from "./tipos";

export const productosApi: ProductoApi[] = [
  {
    id: 1,
    title: 'Audífonos inalámbricos',
    brand: 'TechSound',
    price: 249.9,
    thumbnail: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png',
    stock: 12,
    description: 'Audio envolvente con cancelación de ruido y batería de 30 horas.',
  },
  {
    id: 2,
    title: 'Laptop ultradelgada 14"',
    brand: 'Nova',
    price: 3499,
    thumbnail: 'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png',
    stock: 5,
    description: 'Pantalla nítida, potencia para trabajo y diseño, y cuerpo muy ligero.',
  },
  {
    id: 3,
    title: 'Reloj inteligente',
    brand: 'Clik',
    price: 499.9,
    thumbnail: 'https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png',
    stock: 0,
    description: 'Monitorea ritmo cardíaco, sueño y notificaciones con estilo premium.',
  },
];

export const productos = productosApi.map(adaptarProductoApi);