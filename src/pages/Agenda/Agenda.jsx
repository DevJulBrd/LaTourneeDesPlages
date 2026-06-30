import "./Agenda.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BannerImage from "../../asset/banner_agenda.webp";
import Banner from "../../components/Banner/Banner";
import TournementFilter from "../../components/TournementFilter/TournementFilter";
import tournamentList from "../../data/tournamentList";

function Agenda() {
  const { hash } = useLocation();
  const BannerImg = BannerImage;
  const BannerAlt = "Paysage de plage lors d'un tournoi beach-volley";
  const BannerTitle = "Agenda";

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);

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
