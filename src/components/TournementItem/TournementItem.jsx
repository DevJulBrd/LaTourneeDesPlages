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
  registrationLinks,
}) {
  return (
    <div id={`tournament-${id}`} className="tournementItem-container">
      <div className="tournementItem-relative">
        <img src={img} alt={`${locBeach}`} className="tournementItem-img" />
        <div className="tournementItem-infos-container">
          <div className="tournementItem-title-container">
            <h2 className="tournementItem-city">{locCity}</h2>
            <h3 className="tournementItem-beach">{locBeach}</h3>
            <p className="tournementItem-date">{date}</p>
          </div>

          <div className="tournementItem-categories">
            {categories.map((cat, index) => {
              const link = registrationLinks?.[cat];
              return link ? (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`tournementItem-category tournementItem-register-link ${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </a>
              ) : (
                <span
                  key={index}
                  className={`tournementItem-category ${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </span>
              );
            })}
          </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournementItem;
