import "./Home.css";

import { useState, useEffect } from "react";
import BannerHome from "../../components/BannerHome/BannerHome";
import Dates from "../../components/Dates/Dates";
import Carte from "../../components/Carte-inscription/Carte";
import Description from "../../components/Description/Description";
import PhotoLink from "../../components/PhotosLink/PhotosLink";
import Title from "../../components/Title/Title";
import PhotosLinkLink from "../../components/PhotoLinkLink/PhotoLinkLink";
import Logo from "../../asset/logo-white.webp";
import Coments from "../../components/Coments/Coments";
import BannerImg from "../../asset/caroussel-7-mobil.webp";
import Story from "../../components/Story/Story";
import Caroussel from "../../components/CarousselMobil/Caroussel";
import tournamentList from "../../data/tournamentList";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const TitleCarte = "Retrouvez nos plages ainsi que les dates";
  const TitleDescription = "Un évènement incontournable";
  const TitlePhoto = "La Tournée des Plages c'est avant tout VOUS !";
  const BannerTitle = "La Tournée des Plages";
  const BannerLogo = Logo;
  const BannerMobile = BannerImg;
  const ComentsTitle = "Ils ont donné leurs avis";

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="home-container">
      {isMobile ? (
        <BannerHome
          img={BannerMobile}
          title={BannerTitle}
          logo={BannerLogo}
          mobile={isMobile}
        />
      ) : (
        <BannerHome
          title={BannerTitle}
          logo={BannerLogo}
          mobile={isMobile}
        />
      )}
      {isMobile ? (
        <section className="home-dates-container">
          <Title title={TitleCarte} />
          <div className="home-dates-affiche">
            {tournamentList.map(({ id, date, locBeach }) => (
              <div key={id} className="home-dates-container">
                <Dates date={date} beach={locBeach} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section>
          <Title title={TitleCarte} />
          <Carte />
        </section>
      )}
      {isMobile ? (
        <section className="home-description-container">
          <Title title={TitleDescription} />
          <Description />
        </section>
      ) : (
        <section className="home-description-container">
          <Story />
        </section>
      )}
      {isMobile ? (
        <section className="home-caroussel-container">
          <Title title={TitlePhoto} />
          <Caroussel />
          <PhotosLinkLink />
        </section>
      ) : (
        <section className="home-photolink-section">
          <Title title={TitlePhoto} />
          <PhotoLink />
          <PhotosLinkLink />
        </section>
      )}
      <section className="home-coments-conatiner">
        <Title title={ComentsTitle} />
        <Coments />
      </section>
    </div>
  );
}

export default Home;
