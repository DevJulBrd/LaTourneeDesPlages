import "./Logo.css";
import LogoImg from "../../asset/logo-white.webp";

function Logo() {
  return (
    <img src={LogoImg} alt="Logo de La Tournée Des Plages" className="logo" />
  );
}

export default Logo;
