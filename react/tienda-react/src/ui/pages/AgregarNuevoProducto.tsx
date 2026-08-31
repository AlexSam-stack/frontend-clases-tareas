import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Producto } from "../../dominio/tipos";
import { useNavigate } from "react-router-dom";


type Errores = Partial<Record<keyof Producto, string>>;


function validar(form: Producto): Errores {
    const errores: Errores = {};

    if (form.nombre.trim().length < 3) {
        errores.nombre = "Escribe al menos 3 caracteres para el nombre";
    }

    if (form.marca.trim().length < 3) {
        errores.marca = "Escribe al menos 3 caracteres para la marca";
    }

    if (form.precio <= 0) {
        errores.precio = "El precio debe ser mayor que 0";
    }

    if (
        !/^https?:\/\/.+\.(?:png|jpe?g|gif|webp|svg|bmp|ico|avif)(?:\?.*)?$/i.test(
            form.imagen
        )
    ) {
        errores.imagen = "Ingrese un link válido";
    }

    if (form.stock < 0) {
        errores.stock = "El stock no puede ser negativo";
    }

    if (form.categoria.trim().length < 3) {
        errores.categoria = "Escribe al menos 3 caracteres para la categoría";
    }

    if (form.calificacion < 0 || form.calificacion > 5) {
        errores.calificacion =
            "La calificación debe estar entre 0 y 5";
    }

    return errores;
}

interface Props {
    productos:Producto[]
}
export default function AgregarNuevoProducto({productos}:Props) {

    const [form, setForm] = useState<Producto>({id : 0 ,nombre: '', marca: '', precio: 0 , imagen : '' , stock : 0, categoria : '', calificacion : 0});
    const [tocados, setTocados] = useState<Partial<Record<keyof Producto, boolean>>>({});
    const [guardado, setGuardado] = useState(false);
    const navigate = useNavigate();
    const errores = validar(form);
    const hayErrores = Object.keys(errores).length > 0;
    const cambiar = (campo: keyof Producto) =>
    (e: ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;

        setForm((actual) => ({
            ...actual,
            [campo]:
                campo === "precio" ||
                campo === "stock" ||
                campo === "calificacion"
                    ? Number(valor)
                    : valor
        }));
    };
    const marcar = (campo : keyof Producto) => () => setTocados((tocado) => ({...tocado, [campo] : true}));

    function agregarProducto(producto:Producto){
        productos.push(producto);
    }


    function enviar(e: FormEvent) {
    e.preventDefault();

    setTocados({
        id: true,
        nombre: true,
        marca: true,
        precio: true,
        imagen: true,
        stock: true,
        categoria: true,
        calificacion: true
    });

    if (hayErrores) return;

    const nuevoProducto: Producto = {
        ...form,
        id: Date.now()
    };

    agregarProducto(nuevoProducto);
    setGuardado(true);

    setTimeout(() => {
     navigate("/");
    }, 1500);
    }



    
    if (guardado) {
    return (
        <div className="mx-auto max-w-md rounded-xl border p-6 text-center">
            <h1 className="text-2xl font-bold">
                ✅ Producto agregado correctamente
            </h1>

            <p className="mt-2 text-sm text-gray-500">
                Regresando al catálogo...
            </p>
        </div>
    );
}
    
    return(
        <form onSubmit={enviar} className="flex max-w flex-col gap-3">
            <h1 className="text-2xl font-bold">Datos del Nuevo Producto</h1>
            <label className="flex flex-col text-sm">
               nombre del Producto
               <input 
                    className="rounded border px-3 py-2" 
                    value={form.nombre} 
                    onChange={cambiar('nombre')} // guarda el valor de el campo
                    onBlur={marcar('nombre')}/>
                {
                    tocados.nombre && errores.nombre && (
                        <span className="text-xs text-red-600">{errores.nombre}</span>
                    ) 
                }
            </label>
            <label className="flex flex-col text-sm">
                Marca
                <input className="rounded border px-3 py-2"
                value={form.marca}
                onChange={cambiar('marca')}
                onBlur={marcar('marca')} />
                {
                    tocados.marca && errores.marca && (
                        <span className="text-xs text-red-600">{errores.marca}</span>
                    )
                }
            </label>
            <label className="flex flex-col text-sm">
                Precio
                <input  type="number" className="rounded border px-3 py-2"
                value={form.precio === 0 ? '' : form.precio}
                onChange={cambiar('precio')}
                onBlur={marcar('precio')} />
                {
                    tocados.precio && errores.precio && (
                        <span className="text-xs text-red-600">{errores.precio}</span>
                    )
                }
            </label>
            <label className="flex flex-col text-sm">
                Link de la imagen
                <input className="rounded border px-3 py-2"
                value={form.imagen}
                onChange={cambiar('imagen')}
                onBlur={marcar('imagen')} />
                {
                    tocados.imagen && errores.imagen && (
                        <span className="text-xs text-red-600">{errores.imagen}</span>
                    )
                }
            </label>
            <label className="flex flex-col text-sm">
                stock
                <input type="number" className="rounded border px-3 py-2"
                value={form.stock === 0 ? '' : form.stock}
                onChange={cambiar('stock')}
                onBlur={marcar('stock')} />
                {
                    tocados.stock && errores.stock && (
                        <span className="text-xs text-red-600">{errores.stock}</span>
                    )
                }
            </label>
            <label className="flex flex-col text-sm">
                categoria
                <input className="rounded border px-3 py-2"
                value={form.categoria}
                onChange={cambiar('categoria')}
                onBlur={marcar('categoria')} />
                {
                    tocados.categoria && errores.categoria && (
                        <span className="text-xs text-red-600">{errores.categoria}</span>
                    )
                }
            </label>
             <label className="flex flex-col text-sm">
                calificacion
                <input  type="number" className="rounded border px-3 py-2"
                value={form.calificacion === 0 ? '' : form.calificacion}
                onChange={cambiar('calificacion')}
                onBlur={marcar('calificacion')} />
                {
                    tocados.calificacion && errores.calificacion && (
                        <span className="text-xs text-red-600">{errores.calificacion}</span>
                    )
                }
            </label>
            <button type="submit" disabled={hayErrores} className="mt-2 rounded-full border px-4 py-2">
                Agregar Producto
            </button>
        </form>
    )
}