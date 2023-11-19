import "./Projects.css"

import {Header} from "../../components/Header/Header.jsx"


export const Projects = ({setactualPage, actualPage } ) => {
    setactualPage("Projects")
    return(
        <>
         <Header actualPage={actualPage}/>
        <h1>Proyectos</h1>
        </>
    )
}