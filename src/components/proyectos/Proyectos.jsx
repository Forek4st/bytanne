import cocinas from "../../assets/proyectos/cocinas.png";
import colab from "../../assets/proyectos/colab.png";
import diseno from "../../assets/proyectos/diseno.png";

const Proyectos = () => {
  return (
    <section>
      <div>
        <h2>Cocinas</h2>
        <img src={cocinas} alt="" />
      </div>
      <div>
        <h2>Diseño</h2>
        <img src={colab} alt="" />
      </div>
      <div>
        <h2>Colab</h2>
        <img src={diseno} alt="" />{" "}
      </div>
    </section>
  );
};

export default Proyectos;
