import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Proyectos from "./components/proyectos/Proyectos.jsx";
import Landing from "./components/landing/Landing.jsx";
import Contacto from "./components/contacto/Contacto.jsx";

function App() {
  return (
    <Router>
      <Navbar
        logo="By_TANNE"
        inicio="Inicio"
        proyectos="Proyectos"
        contacto="Contacto"
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
