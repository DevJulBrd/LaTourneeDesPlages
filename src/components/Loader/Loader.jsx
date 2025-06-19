import "./Loader.css";

import Logo from "../../asset/logo_noir.webp";

function Loader() {
  return (
    <div className="loader-container">
      <img
        src={Logo}
        alt="Logo de La Tournée des Plages"
        className="loader-logo"
      />
      <p className="loader-text">Chargement ...</p>
    </div>
  );
}

export default Loader;
