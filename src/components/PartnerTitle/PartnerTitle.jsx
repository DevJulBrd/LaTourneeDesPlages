import "./PartnerTitle.css";

function PartnerTitle({ title }) {
  return (
    <div className="partnerTitle-container">
      <h2 className="partner-partnertitle-title">{title}</h2>
      <p className="partner-partnertitle-text">
        Nous vous invitons à suivre leurs activités en ligne
      </p>
    </div>
  );
}

export default PartnerTitle;
