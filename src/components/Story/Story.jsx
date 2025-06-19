import "./Story.css";

import img from "../../asset/tdp_histoire.webp";

function Story() {
  return (
    <img
      src={img}
      alt="Plaquette de l'hisoire de La Tournée des Plages"
      className="story-img"
    />
  );
}

export default Story;
