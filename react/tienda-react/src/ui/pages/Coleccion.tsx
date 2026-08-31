import { useColeccion } from "../../aplicacion/useColeccion";
import ProductCard from "../components/ProductCard";




export default function Coleccion() {
  const {productosColeccion} = useColeccion();

  return( 
    <>
      { (
        <section className="flex flex-wrap gap-4">
        {
          productosColeccion.map((p) => (
            <ProductCard key={p.id} producto={p}/>
          ))
        }
        </section>
      )}
    </>
  )
}