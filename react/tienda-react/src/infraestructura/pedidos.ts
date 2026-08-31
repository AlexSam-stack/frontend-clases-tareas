import type { Pedido } from "../dominio/tipos";

const CLAVE_PEDIDOS = 'tienda_pedidos';
const CLAVE_HISTORIAL_PEDIDOS = "historial_pedidos";

export function leerPedidos() : Pedido[] {
    try {
        const crudo : unknown = JSON.parse(localStorage.getItem(CLAVE_PEDIDOS) ?? '[]');
        return Array.isArray(crudo) ? (crudo as Pedido[]) : [];
    }catch{
        return [];
    }
}

export function guardarPedido(pedido : Pedido) {
    try {
        localStorage.setItem(CLAVE_PEDIDOS, JSON.stringify([...leerPedidos(), pedido]));
    } catch(error) {
        console.warn('No se puede guardar el pedido: ', error instanceof Error ? error.message : error);
    }
}


export function leerPedidosHistorial(): Pedido[] {
    try {
        const crudo: unknown = JSON.parse(
            localStorage.getItem(CLAVE_HISTORIAL_PEDIDOS) ?? "[]"
        );

        return Array.isArray(crudo) ? (crudo as Pedido[]) : [];
    } catch {
        return [];
    }
}


export function guardarPedidoHistorial(pedido: Pedido): void {
    try {
        const historial = leerPedidosHistorial();

        localStorage.setItem(
            CLAVE_HISTORIAL_PEDIDOS,
            JSON.stringify([...historial, pedido])
        );

    } catch (error) {
        console.warn(
            "Ocurrió un error al guardar el historial:",
            error instanceof Error ? error.message : error
        );
    }
}