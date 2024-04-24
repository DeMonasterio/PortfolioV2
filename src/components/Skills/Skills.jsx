import React from "react";
import "./Skills.css";
import {Technology} from "../../assets/skillsData.json";

import javaIcon from "../../assets/techIcons/java.svg";
import reactIcon from "../../assets/techIcons/react.svg";
import javascriptIcon from "../../assets/techIcons/javascript.svg";
import htmlIcon from "../../assets/techIcons/html.svg";
import cssIcon from "../../assets/techIcons/css.svg";
import mysqlIcon from "../../assets/techIcons/mysql.svg";
import expressIcon from "../../assets/techIcons/express.svg";
import figmaIcon from "../../assets/techIcons/figma.svg";



const getImage = (tech) => {
  switch (tech.id) {
    case 1:
      return(
        <img className="skillcardImage"  src={javaIcon} alt="" />
      )
    case 2:
      return(
        <img className="skillcardImage" src={reactIcon} alt="" />
      )
    case 3:
      return(
        <img className="skillcardImage" src={figmaIcon} alt="figma icon" />
      )
    case 4:
      return(
        <img  className="skillcardImage" src={javascriptIcon} alt="" />
      )
    case 5:
      return(
        <img className="skillcardImage"  src={htmlIcon} alt="" />
      )
    case 6:
      return(
        <img  className="skillcardImage" src={cssIcon} alt="" />
      )
    case 7:
      return(
        <img  className="skillcardImage" src={mysqlIcon} alt="" />
      )
    case 8:
      return(
        <img  className="skillcardImage" src={expressIcon} alt="" />
      )
  }

}

const createCard = (tech) => {
  return(
  <article className="skillCard" >
    <h4>{tech.name}</h4>
    {getImage(tech)}
  </article>
  
  )

}


export const Skills = () => {
  return (
    <div className="skillcardContainer">
      {Technology.map((tech) => createCard(tech))}
    </div>
  );
};

