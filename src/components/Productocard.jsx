import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import usePagina from "../hooks/usePagina";

const Productocard = ({producto}) => {

    const {titulo, precio, descripcion, imagenes, status, colores, edad, categoria, genero, preciomayorista} = producto;

    const { pagina } = usePagina();
    let tipocliente;
    let precioshow

    if (pagina === "inicio") {
      precioshow = preciomayorista
      tipocliente = "d";
    } else {
      precioshow = precio
      tipocliente = "m"
    }
     
    const navegar = useNavigate();

    //Reemplaza el espacio por un - para que la url se pueda compartir
    const titulourl = titulo.replace(/ /g, "-");

  return (
    <>
        <div className="productocard cursor-pointer" onClick={() => window.open(`/${titulourl}/${tipocliente}`)}>
            <div className="div-imagen-prodcard">
              <img src={imagenes[0].url} className="cursor-pointer" alt={`Imagen ${titulo}`} />
            </div>
            <div className="contenidocard">
                <p className="titulo cursor-pointer hover:underline" >{titulo}</p>
                <p className="precio cursor-pointer" >{tipocliente === "m" ? "" : "Precio Mayorista:"} <span className={`${tipocliente === "m" ? "" : "preciocard"}`}>{`$${precioshow.toLocaleString('es-CO')}`}</span></p>
                {tipocliente === "d" ? (
                  <>
                    <p className="precio cursor-pointer" >Precio Sugerido: <span className="preciocard">{`$${precio.toLocaleString('es-CO')}`}</span></p>
                  </>
                ) : (
                  <>
                  </>
                )}

                <Link className="informacion">Ver Más</Link>
            </div>
        </div>
    </>
  )
}

export default Productocard