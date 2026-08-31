import { useContext } from "react";
import { coleccionContext } from "./ColeccionContext";

export function useColeccion(){
    const contexto = useContext(coleccionContext);
    if(!contexto) throw new Error('useCart solo funciona dentro de <CarritoProvider>.');
    return contexto;
}