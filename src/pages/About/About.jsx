import "./About.css";

import { Header } from "../../components/Header/Header.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";



export const About = ({ setactualPage, actualPage }) => {
  setactualPage("About");
  return (
    <>
      <Header actualPage={actualPage} />
      <Main/>
      <Footer/>
    </>
  );
};
