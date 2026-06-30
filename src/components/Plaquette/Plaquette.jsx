import "./Plaquette.css";

function Plaquette() {
  return (
    <div className="plaquette-partner">
      <a
        href={`${process.env.PUBLIC_URL}/plaquette_sponsor.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="plaquette-link"
      >
        Consultez nos offres !
      </a>
    </div>
  );
}

export default Plaquette;
