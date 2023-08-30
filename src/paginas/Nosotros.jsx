import { useEffect } from "react"
import usePagina from "../hooks/usePagina"

const Nosotros = () => {

  const { pagina, setpagina } = usePagina();

  useEffect(() => {
    setpagina('nosotros')
  }, [])

  return (
    <>
      <div className="contenedor">
        <h1>NOSOTROS</h1>
        <div className="contenido-nosotros">
          <div className="imagenes-nosotros">
            <div className="div-imagen">
              <img src="/jair.jpg" alt="imagen-jair" />
            </div>
            <div className="div-imagen">
              <img src="/cepeda.jpg" alt="imagen-cepeda" />
            </div>
          </div>
          <div className="p-contactar">
            <p>¡Bienvenidos a la Juguetería Jammy, donde todos los sueños se hacen realidad y cada sonrisa cuenta. Somos dos ingenieros industriales de la Pontificia Universidad Javeriana, los cuales buscamos brindar una excelente experiencia a todos los niños de nuestros seres queridos o amigos por medio de nuestros juguetes. Nos caracterizamos por ofrecer productos innovadores, de calidad, seguros y asequibles que quizás son inimaginables para nosotros y nos brindan una sonrisa. Realizamos envíos a cualquier parte del país, por lo que nos puedes contar cuál es el sueño de tu pequeño por cumplir!</p>
            <div className="adicion">
              <div className="boton-ordenar boton-nosotros" onClick={() => {
                window.open("https://wa.me/573246767492?text=Hola%20Jammy,%20quisiera%20saber%20mas%20informacion%20por%20favor%20", '_blank');
              }}>
                <img className="" src="/wa.webp" alt="wa" />
                <p>CONTACTARSE</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Nosotros