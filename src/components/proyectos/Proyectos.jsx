import cocinas from "../../assets/proyectos/cocinas.png";
import colab from "../../assets/proyectos/colab.png";
import diseno from "../../assets/proyectos/diseno.png";

const Proyectos = () => {
  return (
    <main className="proyectos">
      <section>
        <div>
          <div className="titles">
            <h2>Cocinas</h2>
          </div>
          <img src={cocinas} alt="" />
        </div>
        <div>
          <div className="titles">
            <h2>Diseño</h2>
          </div>
          <img src={colab} alt="" />
        </div>
        <div>
          <div className="titles">
            <h2>Colab</h2>
          </div>
          <img src={diseno} alt="" />{" "}
        </div>
      </section>
    </main>
  );
};

export default Proyectos;
