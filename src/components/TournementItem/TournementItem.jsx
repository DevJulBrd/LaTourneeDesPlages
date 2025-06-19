import "./TournementItem.css";

function TournementItem({
  id,
  date,
  locCity,
  locBeach,
  img,
  categories,
  timeSubscribe,
  timeStart,
  DJ,
}) {
  return (
    <div className="tournementItem-container">
      <div className="tournementItem-relative">
        <img src={img} alt={`${locBeach}`} className="tournementItem-img" />
        <div className="tournementItem-infos-container">
          <div className="tournementItem-title-container">
            <h2 className="tournementItem-city">{locCity}</h2>
            <h3 className="tournementItem-beach">{locBeach}</h3>
            <p className="tournementItem-date">{date}</p>
          </div>
          {categories === "Masters" && (
            <div className="tournementItem-master">Masters</div>
          )}
          <div className="tournementItem-animation">
            <div className="tournementItem-categorie-container">
              Déroulement de la journée
            </div>
            <div className="tournementItem-time-container">
              <p className="tournementItem-time">
                Début des inscriptions {timeSubscribe}
              </p>
              <p className="tournementItem-time">Initiation ouverte à tous !</p>
              <p className="tournementItem-time">
                Début des matchs {timeStart}
              </p>
            </div>
            {DJ ? (
              <p className="tournementItem-dj">DJ set</p>
            ) : (
              <p className="tournementItem-none"></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournementItem;
