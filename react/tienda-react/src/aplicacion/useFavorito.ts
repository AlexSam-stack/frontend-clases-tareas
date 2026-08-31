import { useContext } from "react";
import { favoritoContext } from "./favoritoContext";


export function useFavorito(){
    const contexto = useContext(favoritoContext);
    if(!contexto) throw new Error('useContext solo funciona dentro de <FavoritoProvider>.');
    return contexto;
}