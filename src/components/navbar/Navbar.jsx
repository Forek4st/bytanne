import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ logo, inicio, proyectos, contacto }) => {
  return (
    <header>
      <nav>
        {" "}
        <div>
          <h1>{logo}</h1>
        </div>
        <ul>
          <li>
            <Link to="/">{inicio}</Link>
          </li>
          <li>
            <Link to="/proyectos">{proyectos}</Link>
          </li>
          <li>
            <Link to="/contacto">{contacto}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  inicio: PropTypes.string.isRequired,
  proyectos: PropTypes.string.isRequired,
  contacto: PropTypes.string.isRequired,
};

export default Navbar;
