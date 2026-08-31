import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Producto } from "../dominio/tipos";
import { guardarFavorito, leerColeccion } from "../infraestructura/almacen";
import { agregarFavorito, quitarFavorito} from "../dominio/itemFavorito";



interface ValorColeccion {
    productosColeccion : Producto[];
    agregar : (Producto: Producto)=> void;
    quitar : (id : number)=>void;
    vacia : () => void;
    esEnColeccion : (id : number)=>boolean;
}

export const coleccionContext = createContext<ValorColeccion | null> (null);

export function ColeccionProvider ( {children} : {children:ReactNode} ){

    const [productosColeccion, setproductosColeccion] = useState<Producto[]>(leerColeccion);
    
    useEffect(() => {
        guardarFavorito(productosColeccion);
    },[productosColeccion]);
    
  
    function agregar(producto : Producto) { 
        setproductosColeccion((actuales) => agregarFavorito(actuales,producto));
    }
    
    function quitar(id : number) {
        setproductosColeccion((actuales) => quitarFavorito(actuales, id));
    }
    
    function esEnColeccion(id : number) : boolean {
        return productosColeccion.some((p)=>p.id===id);
    }
    
    function vacia(){
        setproductosColeccion([]);
    }
    return (
        <coleccionContext.Provider value={{productosColeccion, agregar, quitar, vacia, esEnColeccion}}>
            {children}
        </coleccionContext.Provider>
    )
    
}