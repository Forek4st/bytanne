import Navbar from "./components/navbar/Navbar.jsx";
import Landing from "./components/landing/Landing.jsx";

const byTanne = "by Tanne";
const Inicio = "Inicio";
const Proyectos = "Proyectos";
const Contacto = "Contacto";

const App = () => {
  return (
    <>
      <Navbar
        logo={byTanne}
        inicio={Inicio}
        proyectos={Proyectos}
        contacto={Contacto}
      />
      <Landing />
    </>
  );
};

export default App;
