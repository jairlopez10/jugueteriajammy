import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Productocard = ({producto}) => {

    const {titulo, precio, descripcion, imagenes, status, colores, edad, categoria, genero} = producto;
    const navegar = useNavigate();

    //Reemplaza el espacio por un - para que la url se pueda compartir
    const titulourl = titulo.replace(/ /g, "-");

  return (
    <>
        <div className="productocard cursor-pointer" onClick={() => navegar(`/${titulourl}`)}>
            <div className="div-imagen-prodcard">
              <img src={imagenes[0].url} className="cursor-pointer" alt={`Imagen ${titulo}`} />
            </div>
            <div className="contenidocard">
                <p className="titulo cursor-pointer hover:underline" >{titulo}</p>
                <p className="precio cursor-pointer" >{`$${precio.toLocaleString('es-CO')}`}</p>
                <Link className="informacion">Ver Información</Link>
            </div>
        </div>
    </>
  )
}

export default Productocard