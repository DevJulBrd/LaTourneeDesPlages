import "./FooterPartner.css";

function FooterPartner({ name, logo, link }) {
  return (
    <a href={link} className="footerpartner-link">
      <img src={logo} alt={`Logo ${name}`} className="footerpartner-logo" />
      <p className="footerpartner-name">{name}</p>
    </a>
  );
}

export default FooterPartner;
