import profilePic from "../../assets/profilePic.png";

const Contacto = () => {
  return (
    <main className="contact">
      <div>
        <img src={profilePic} alt="" />
      </div>
      <div className="contact-info">
        <p>Tane Dieguez Alvarez</p>
        <p>México</p>
        <p>5632884680</p>
        <p>by.tannedieguez@gmail.com</p>
        <p>Diseñadora de Interiores</p>
      </div>
    </main>
  );
};

export default Contacto;
