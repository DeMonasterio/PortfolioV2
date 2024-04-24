import { Link } from "react-router-dom";

import deMonasterioCV from "../../assets/cv/deMonasterioCv.pdf"


export default function NavBar({ actualPage }) {


    const getHome = () => {
        return (
            <li className="navbar__item">
                <Link className="nav__anchor" to={"/"}>
                    Home
                </Link>
            </li>

        )
    }
    const getAbout = () => {
        return (
            <li className="navbar__item">
                <Link className="nav__anchor" to={"/about"}>
                    Sobre Mi
                </Link>
            </li>
        )
    }
    const getProjects = () => {
        return (
            <li className="navbar__item">
                <Link className="nav__anchor" to={"/projects"}>
                    Proyectos
                </Link>
            </li>
        )
    }
    const getContact = () => {
        return (
            <li className="navbar__item">
                <Link className="nav__anchor" to={"/contact"}>
                    Contacto
                </Link>
            </li>
        )
    }
    const getCV = () => {
        return (
            <li className="navbar__item" ><a className="nav__anchor" download="" href={deMonasterioCV}>Descargar CV</a></li>
        )
    }


    const getLinks = () => {
        switch (actualPage) {
            case "Home": return (
                <>
                    {getAbout()}
                    {getProjects()}
                    {getContact()}
                    {getCV()}
                </>
            )
            case "About": return (
                <>
                    {getHome()}
                    {getProjects()}
                    {getContact()}
                    {getCV()}
                </>
            )
            case "Projects": return (
                <>
                    {getHome()}
                    {getAbout()}
                    {getContact()}
                    {getCV()}
                </>
            )
            case "Contact": return (
                <>
                    {getHome()}
                    {getAbout()}
                    {getProjects()}
                    {getCV()}
                </>
            )
            default: return(
                <>
                    {getAbout()}
                    {getProjects()}
                    {getContact()}
                    {getCV()}
                </>
            )
        }
    }

    return (
        <>
        <nav className={actualPage != "Home" ? "navbarsubline navbar":"navbar"}>
            <ul className="navbar__list">
                {getLinks()}
            </ul>
        </nav>
            <div className={actualPage != "Home" ? "AnimateLine": ""}></div>
        </>
    )

}
