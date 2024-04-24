import "./Main.css"
import { Skills } from "../Skills/Skills.jsx";
import { Courses } from "../Courses/Courses.jsx";
import meImage from "../../assets/images/meImage.png"


export const Main = () => {
    return (
        <main>
            <div className="aboutme--container">
                <p className="aboutmepara">
                    Soy Juan Manuel de Monasterio y me dedico a programar,
                    logrando la creación de soluciones tecnológicas que tienen cierto grado de especialidad.
                    Me enfoco en el desarrollo web y de aplicaciones, abarcando tanto el front-end
                    , el diseño y el back-end.
                    Mi intención es combinar creatividad y funcionalidad para crear experiencias digitales que marquen una diferencia.
                </p>
                <p className="aboutmepara">
                    Mi especialidad radica en mi intención de mantener y potenciar la marca personal de cada proyecto.
                    Ofrezco soluciones sólidas y seguras.
                    Si buscas un programador que diseñe conforme a tus necesidades para tu proyecto,
                    estoy listo para ayudarte a llevarlo al siguiente nivel. ¡Hablemos y convirtamos tu visión en realidad!
                </p>
            </div>


            <div className="skillphoto">
                <Skills />
                <div className="imagecontainer">
                    <img src={meImage} className="meImage" alt="Foto de Juan" />
                </div>
            </div>
            <Courses />
        </main>
    )
}