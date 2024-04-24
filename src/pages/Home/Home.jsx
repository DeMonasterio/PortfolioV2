import "./Home.css"

import {Header} from "../../components/Header/Header.jsx"

export const Home = ({setactualPage, actualPage } ) => {
    setactualPage("Home")
    return(
        <>
        <Header actualPage={actualPage}/>
        
        </>
    )
}