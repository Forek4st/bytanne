import cocinas from "../../assets/proyectos/cocinas.png";
import colab from "../../assets/proyectos/colab.png";
import diseno from "../../assets/proyectos/diseno.png";

const Proyectos = () => {
  return (
    <section>
      <div>
        <img src={cocinas} alt="" />
      </div>
      <div>
        <img src={colab} alt="" />
      </div>
      <div>
        <img src={diseno} alt="" />{" "}
      </div>
    </section>
  );
};

export default Proyectos;
