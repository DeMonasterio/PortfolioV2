import "./Header.css"
import NavBar from "../NavBar/NavBar.jsx";
import demonasterioIcon from "../../assets/icons/demonasterio.svg";
import aboutIcon from "../../assets/icons/about.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import contactIcon from "../../assets/icons/contact.svg";
import Subtitle from "../../assets/icons/subtitleHome.svg";
import { useEffect, useState } from "react";

export const Header = ({ actualPage }) => {
  const [Icon, setIcon] = useState();

  useEffect(() => {
    const loadIcon = async () => {
      let loadedIcon;
      switch (actualPage) {
        case "Home":
          loadedIcon = demonasterioIcon;
          break;
        case "About":
          loadedIcon = aboutIcon;
          break;
        case "Projects":
          loadedIcon = projectsIcon;
          break;
        case "Contact":
          loadedIcon = contactIcon;
          break;
        default:
          loadedIcon = demonasterioIcon;
      }
      setIcon(loadedIcon);
    };
    loadIcon();
  }, [actualPage]);


  const [classMenu, setClassMenu] = useState(false);
  const toggleMenu = () => {
    setClassMenu(!classMenu);
  };






  return (

    <header>
      <div className={classMenu ? "menu__active" : "menu__button"} onClick={toggleMenu} >
        <span className="menu__label"></span>
        <span className="menu__label"></span>
        <span className="menu__label"></span>
        {classMenu ? <NavBar actualPage={actualPage} /> : ""}
      </div>


      <div className="hero__container">
        <div className="toAnimate">
        </div>
        {actualPage === "Home" ? <></> : <div className="space"></div>}
        <img src={Icon} alt="" className="hero__title" />
        {actualPage === "Home" ? <img src={Subtitle} alt="" className="hero__subtitle" /> : <></>}
      </div>


      {classMenu ? "" : <NavBar actualPage={actualPage}/>}
    </header>

  )
}