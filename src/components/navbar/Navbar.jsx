import PropTypes from "prop-types";

const Navbar = ({ logo, inicio, proyectos, contacto }) => {
  return (
    <header>
      <div>
        <h1>{logo}</h1>
      </div>
      <ul>
        <li>{inicio}</li>
        <li>{proyectos}</li>
        <li>{contacto}</li>
      </ul>
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
