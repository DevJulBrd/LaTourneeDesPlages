import "./Agenda.css";

import BannerImage from "../../asset/banner_agenda.webp";
import Banner from "../../components/Banner/Banner";
import palmyreBeach from "../../asset/plage-palmyre.webp";
import masterNauzan from "../../asset/master_nauzan.webp";
import vauxBeach from "../../asset/nauzan-beach.webp";
import pontaillacBeach from "../../asset/caroussel-7.webp";
import stgeorgesBeach from "../../asset/stgeorge_beach.webp";
import masterStGeorges from "../../asset/master_stgeorge.webp";
import meschersBeach from "../../asset/meschers_beach.webp";
import TournementFilter from "../../components/TournementFilter/TournementFilter";

function Agenda() {
  const BannerImg = BannerImage;
  const BannerAlt = "Logos de nos partenaire sur un paysage";
  const BannerTitle = "Agenda";

  const tournementList = [
    {
      id: "00",
      date: "10 Juillet",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      img: palmyreBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "01",
      date: "12 Juillet",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      img: pontaillacBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "02",
      date: "13 Juillet",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      img: pontaillacBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H",
    },
    {
      id: "03",
      date: "15 Juillet",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      img: stgeorgesBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "04",
      date: "17 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      img: vauxBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "05",
      date: "19 Juillet",
      locCity: "Meschers-sur-Gironde",
      locBeach: "Plage des Nonnes",
      img: meschersBeach,
      categories: ["Master Femme", "Master Homme", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "06",
      date: "20 Juillet",
      locCity: "Meschers-sur-Gironde",
      locBeach: "Plage des Nonnes",
      img: meschersBeach,
      categories: ["Master Femme", "Master Homme"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "07",
      date: "22 Juillet",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      img: stgeorgesBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "08",
      date: "24 Juillet",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      img: palmyreBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "09",
      date: "26 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      img: masterNauzan,
      categories: ["Master Femme", "Master Homme", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "10",
      date: "27 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      img: masterNauzan,
      categories: ["Master Femme", "Master Homme", "Masters Kids"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "11",
      date: "29 Juillet",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      img: pontaillacBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "12",
      date: "31 Juillet",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      img: vauxBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "13",
      date: "2 Août",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      img: masterStGeorges,
      categories: ["Master Femme", "Master Homme", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "14",
      date: "3 Août",
      locCity: "Saint-Georges-de-Didonne",
      locBeach: "Plage de la Conche Nord",
      img: masterStGeorges,
      categories: ["Master Femme", "Master Homme", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "15",
      date: "5 Août",
      locCity: "Meschers-sur-Gironde",
      locBeach: "Plage des Vergnes",
      img: meschersBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "16",
      date: "7 Août",
      locCity: "Royan",
      locBeach: "Plage de la Grande Conche",
      img: pontaillacBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "17",
      date: "9 Août",
      locCity: "Royan",
      locBeach: "Master de Pontaillac by Eden Villages",
      img: pontaillacBeach,
      categories: ["Master Femme", "Master Homme", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "18",
      date: "10 Août",
      locCity: "Royan",
      locBeach: "Master de Pontaillac by Eden Villages",
      img: pontaillacBeach,
      categories: ["Master Femme", "Master Homme"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "19",
      date: "12 Août",
      locCity: "Saint-Palais / Vaux-sur-Mer",
      locBeach: "Plage de Nauzan",
      img: vauxBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "20",
      date: "14 Août",
      locCity: "Royan",
      locBeach: "Plage de Pontaillac",
      img: pontaillacBeach,
      categories: ["Femmes", "Hommes", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "21",
      date: "16 Août",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      img: palmyreBeach,
      categories: ["Master Miste", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
    {
      id: "22",
      date: "17 Août",
      locCity: "Les Mathes La Palmyre",
      locBeach: "Plage de la Palmyre",
      img: palmyreBeach,
      categories: ["Master Miste", "Loisirs"],
      timeSubscribe: "10H",
      timeStart: "11H"
    },
  ];

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="agenda-tournmentList-container">
        <TournementFilter tournementList={tournementList} />
      </section>
    </div>
  );
}

export default Agenda;
