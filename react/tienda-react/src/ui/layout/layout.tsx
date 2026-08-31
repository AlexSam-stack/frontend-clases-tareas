import {  useState } from "react";
import Header from "../components/Header";
import PanelCarrito from "../components/Carrito";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import PanelFavorito from "../components/favoritos";

export default function Layout(){
    const [carritoAbierto, setCarritoAbierto] = useState(false);
    const [favoritoAbierto, setFavoritoAbierto] = useState(false);
    const nombreTienda = import.meta.env.VITE_NOMBRE_TIENDA;

    return(
        <main className="mx-auto  p-6">
            <Header nombre={nombreTienda} eslogan="Ofertas de agosto"/>
            <nav className="flex gap-6">
  <div className="flex flex-col">
    <button className="mb-4 text-sm" onClick={() => setCarritoAbierto(!carritoAbierto)}>
      {carritoAbierto ? 'Ocultar Carrito' : 'Ver carrito'}
    </button>
    {
      carritoAbierto && <PanelCarrito />
    }
  </div>

  {/* Sección Favoritos */}
  <div className="flex flex-col">
    <button className="mb-4 text-sm" onClick={() => setFavoritoAbierto(!favoritoAbierto)}>
      {favoritoAbierto ? 'Ocultar favoritos' : 'Ver favoritos'}
    </button>
    {
      favoritoAbierto && <PanelFavorito />
    }
  </div>
</nav>
            <Outlet/>
            <Footer/>
        </main>
    )
    
}