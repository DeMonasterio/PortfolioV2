// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useMousePosition} from"./hooks/useMousePosition.jsx"
// Components



// Pages
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Projects } from "./pages/Projects/Projects.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
// Others imports
import './App.css'
import { useState } from "react";

function App() {
 
  const [actualPage, setactualPage] = useState()



  // const mousePosition = useMousePosition();

  const { x, y } = useMousePosition();


    const cursorStyle = {
      top: `${y}px`,
      left: `${x}px`,
    };
    

  return (
    <>
      <div className="cursorEstilo"  style={cursorStyle}/>
      <div className="cursorEstilo2"  style={cursorStyle} /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setactualPage={setactualPage} actualPage={actualPage}  />} />
          <Route path="/about" element={<About  setactualPage={setactualPage} actualPage={actualPage}   />} />
          <Route path="/projects" element={<Projects  setactualPage={setactualPage} actualPage={actualPage}   />} />
          <Route path="/contact" element={<Contact  setactualPage={setactualPage} actualPage={actualPage}   />} />
          <Route path='*' element={<h3>Ruta inexistente</h3>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
