import "./TournementItem.css";

const NEOSCORE_APP_STORE = "https://apps.apple.com/fr/app/neoscore/id6747252671";
const NEOSCORE_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.digimeo.neoscore&utm_source=emea_Med";

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

          {registrationLinks && (
            <div className="tournementItem-neoscore">
              <p className="tournementItem-neoscore-text">
                Inscris-toi via l'app Neoscore
              </p>
              <div className="tournementItem-neoscore-stores">
                <a
                  href={NEOSCORE_APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tournementItem-store-link"
                >
                  App Store
                </a>
                <a
                  href={NEOSCORE_PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tournementItem-store-link"
                >
                  Google Play
                </a>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournementItem;
