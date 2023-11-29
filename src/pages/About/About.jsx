import "./About.css";

import { Header } from "../../components/Header/Header.jsx";
import { Skills } from "../../components/Skills/Skills.jsx";
import meImage from "../../assets/images/meImage.png"

export const About = ({ setactualPage, actualPage }) => {
  setactualPage("About");
  return (
    <>
      <Header actualPage={actualPage} />
      <main>
        <div className="aboutme--container">
        <p className="aboutmepara" >
          Soy Juan Manuel de Monasterio, un programador Full Stack apasionado
          por la creación de soluciones tecnológicas. Mi enfoque se centra en el
          desarrollo web y de aplicaciones, abarcando tanto el front-end como el
          back-end. Mi objetivo es combinar creatividad y funcionalidad para
          crear experiencias digitales excepcionales.
        </p>
        <p  className="aboutmepara" >
          Con experiencia en HTML, CSS, JavaScript, Node.js y bases de datos,
          ofrezco soluciones sólidas y seguras. Si buscas un colaborador técnico
          para tu proyecto, estoy listo para ayudarte a llevarlo al siguiente
          nivel. ¡Hablemos y convirtamos tu visión en realidad!
        </p>
        </div>
        <div className="skillphoto">
            <Skills/>
            <div className="imagecontainer">
                <img src={meImage} className="meImage" alt="Foto de Juan" />
            </div>
        </div>

      </main>
    </>
  );
};
