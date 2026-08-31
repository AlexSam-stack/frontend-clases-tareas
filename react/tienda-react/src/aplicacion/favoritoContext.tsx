import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Producto } from "../dominio/tipos";
import { guardarFavorito, leerFavoritos } from "../infraestructura/almacen";
import { agregarFavorito, quitarFavorito, toggleFavorito } from "../dominio/itemFavorito";



interface ValorFavorito {
    productosFavoritos : Producto[];
    agregar : (Producto: Producto)=> void;
    quitar : (id : number)=>void;
    vacia : () => void;
    ontogle: (producto: Producto)=>void;
    esFavorito : (id : number)=>boolean;
}

export const favoritoContext = createContext<ValorFavorito | null> (null);

export function FavoritoProvider ( {children} : {children:ReactNode} ){

    const [productosFavoritos, setProductosFavoritos] = useState<Producto[]>(leerFavoritos);
    
    useEffect(() => {
        guardarFavorito(productosFavoritos);
    },[productosFavoritos]);
    
  
    function agregar(producto : Producto) { 
        setProductosFavoritos((actuales) => agregarFavorito(actuales,producto));
    }
    
    function quitar(id : number) {
        setProductosFavoritos((actuales) => quitarFavorito(actuales, id));
    }
    
    function ontogle(producto: Producto) {
        setProductosFavoritos((actuales) => toggleFavorito(actuales,producto));
    }
    
    function esFavorito(id : number) : boolean {
        return productosFavoritos.some((p)=>p.id===id);
    }
    
        function vacia(){
            setProductosFavoritos([]);
        }
        return (
            <favoritoContext.Provider value={{productosFavoritos, agregar, quitar, vacia , ontogle,esFavorito}}>
                {children}
            </favoritoContext.Provider>
        )
    
}