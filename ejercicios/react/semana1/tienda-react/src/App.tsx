
import './App.css'
import { ProductCard } from './ProductCard'
import { catalogoSemilla } from './datos'
import { Practica } from './Practica'

const tienda = 'SaeRat Tech'
const productosEnCarrito = 3

function App() {
  const productosDestacados = catalogoSemilla.slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.38em] text-cyan-300">Tech • Lifestyle</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-white">{tienda}</h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#" className="transition hover:text-cyan-300">Inicio</a>
            <a href="#" className="transition hover:text-cyan-300">Catálogo</a>
            <a href="#" className="transition hover:text-cyan-300">Ofertas</a>
            <a href="#" className="transition hover:text-cyan-300">Soporte</a>
          </nav>

          <button className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20">
            Carrito ({productosEnCarrito})
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="mb-12 overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 shadow-2xl shadow-cyan-950/20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Tu próxima compra</p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight text-white md:text-5xl">
                Tecnología que acompaña tu día a día.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
                Descubre accesorios, móviles y portátiles con un diseño premium, rendimiento real y precio pensado para estar a la altura de tu dia a dia.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
                  Ver catálogo
                </button>
                <button className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300">
                  Ver ofertas
                </button>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/70 p-4 shadow-xl shadow-cyan-950/30">
              <div className="rounded-[1.25rem] border border-slate-700 bg-slate-900 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span>Grabación</span>
                  <span>Live</span>
                </div>
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-slate-800 p-4">
                  <p className="text-sm font-medium text-cyan-200">Top ventas</p>
                  <p className="mt-3 text-2xl font-black text-white">MacBook Pro</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-300">⭐ 4.57</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-semibold text-emerald-300">En stock</span>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                  <div className="rounded-xl border border-slate-700 bg-slate-800 p-3">
                    <p className="text-xl font-black text-white">12h</p>
                    <p className="mt-1">Batería</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-800 p-3">
                    <p className="text-xl font-black text-white">16GB</p>
                    <p className="mt-1">RAM</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-800 p-3">
                    <p className="text-xl font-black text-white">1TB</p>
                    <p className="mt-1">SSD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalogo" className="mb-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Catálogo</p>
              <h3 className="mt-2 text-3xl font-bold text-white">Nuestra vitrina</h3>
            </div>
            <p className="text-sm text-slate-400">Mostrando {productosDestacados.length} productos destacados</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productosDestacados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </section>

        <Practica />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {tienda}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-cyan-300">Instagram</a>
            <a href="#" className="transition hover:text-cyan-300">X</a>
            <a href="#" className="transition hover:text-cyan-300">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
