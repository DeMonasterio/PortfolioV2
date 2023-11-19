import "./Contact.css"

import {Header} from "../../components/Header/Header.jsx"


export const Contact = ({setactualPage, actualPage } ) => {
    setactualPage("Contact")
    return(
        <>
         <Header actualPage={actualPage}/>
        <h1>Contacto</h1>
        </>
    )
}