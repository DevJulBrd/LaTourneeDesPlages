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

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const TitleCarte = "Retrouvez nos plages ainsi que les dates";
  const TitleDescription = "Un évènement incontournable";
  const TitlePhoto = "La Tournée des Plages c'est avant tout VOUS !";
  const BannerTitle = "La Tournee des Plages";
  const BannerLogo = Logo;
  const BannerMobile = BannerImg;
  const ComentsTitle = "Ils ont donné leurs avis";
  const tournementList = [
    {
      id: "00",
      date: "10 Juillet",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "01",
      date: "12 Juillet",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "02",
      date: "13 Juillet",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "03",
      date: "15 Juillet",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "04",
      date: "17 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "05",
      date: "19 Juillet",
      locCity: "Meschers-sur-Gironde",
      locBeach: "Plage des Nonnes",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "06",
      date: "20 Juillet",
      locCity: "Meschers-sur-Gironde",
      locBeach: "Plage des Nonnes",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "07",
      date: "22 Juillet",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "08",
      date: "24 Juillet",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "09",
      date: "26 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "10",
      date: "27 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "11",
      date: "29 Juillet",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "12",
      date: "31 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "13",
      date: "2 Août",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "14",
      date: "3 Août",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "15",
      date: "5 Août",
      locCity: "Meschers-sur-Gironde",
      locBeach: "Plage de Suzac",

      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "16",
      date: "7 Août",
      locCity: "Royan",
      locBeach: "Plage de la Grande Conche",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "17",
      date: "9 Août",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "18",
      date: "10 Août",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "19",
      date: "12 Août",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "20",
      date: "14 Août",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      categories: "",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: false,
    },
    {
      id: "21",
      date: "16 Août",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
    {
      id: "22",
      date: "17 Août",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      categories: "Master",
      timeSubscribe: "10H",
      timeStart: "11H",
      DJ: true,
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (
        /android|iphone|ipad|iPod|windows phone/i.test(userAgent.toLowerCase())
      ) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIfMobile();
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
          mibile={isMobile}
        />
      )}
      {isMobile ? (
        <section className="home-dates-container">
          <Title title={TitleCarte} />
          <div className="home-dates-affiche">
            {tournementList.map(({ index, date, locBeach }) => (
              <div className="home-dates-container">
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
