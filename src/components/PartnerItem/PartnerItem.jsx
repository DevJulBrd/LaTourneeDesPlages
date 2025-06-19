import "./PartnerItem.css";

function PartnerItem({ name, logo, link }) {
  return (
    <a href={link} className="partner-link">
      <div className="partner-container">
        <img
          src={logo}
          alt={`Logo de ${name}`}
          className="partner-partner-logo"
        />
        <h2 className="partner-partner-title">{name}</h2>
      </div>
    </a>
  );
}

export default PartnerItem;
