import "./Agenda.css";

import BannerImage from "../../asset/banner_agenda.webp";
import Banner from "../../components/Banner/Banner";
import TournementFilter from "../../components/TournementFilter/TournementFilter";
import tournamentList from "../../data/tournamentList";

function Agenda() {
  const BannerImg = BannerImage;
  const BannerAlt = "Paysage de plage lors d'un tournoi beach-volley";
  const BannerTitle = "Agenda";

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="agenda-tournmentList-container">
        <TournementFilter tournementList={tournamentList} />
      </section>
    </div>
  );
}

export default Agenda;
