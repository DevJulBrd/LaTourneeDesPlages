import "./CarousselFooter.css";

function CarousselFooter({ name, logo, link }) {
  return (
    <div className="carousselFooter-container">
      <a href={link} className="carousselFooter-link">
        <div className="carousselFooter-logo-container">
          <img src={logo} alt={`Logo de la ville de ${name}`} className="carousselFooter-logo" />
        </div>
        <p className="carousselFooter-name">{name}</p>
      </a>
    </div>
  );
}

export default CarousselFooter;
