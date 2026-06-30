import "./Partner.css";

import BannerImage from "../../asset/caroussel-1.webp";
import BKLogo from "../../asset/burger-king.webp";
import ZooPalmyreLogo from "../../asset/zoo-de-la-palmyre.webp";
import RanchoLogo from "../../asset/rancho.webp";
import CoolongalookLogo from "../../asset/coolongalook.webp";
import InterLogo from "../../asset/inter-marche.webp";
import FamilyLogo from "../../asset/family-fun-park.webp";
import PeponnetteLogo from "../../asset/huitres_peponnet.webp";
import GardratLogo from "../../asset/domaine-gardrat.webp";
import BCLogo from "../../asset/bc_autos.webp";
import ValdecLogo from "../../asset/valdec.webp";
import EdenLogo from "../../asset/eden_village.webp";
import CasinoLogo from "../../asset/casino.webp";
import Bepi from "../../asset/bepi.webp";
import SucreSale from "../../asset/sucresale.webp";
import RoyanLogo from "../../asset/royan.webp";
import VauxLogo from "../../asset/vaux.webp";
import PalmyreLogo from "../../asset/la-palmyre.webp";
import SaintGeorgesLogo from "../../asset/saint-georges.webp";
import SaintPalaisLogo from "../../asset/saint-palais.webp";
import MeschersLogo from "../../asset/meschers.webp";
import RoyanAtlantiqueLogo from "../../asset/royan-atlantique.webp";
import CharenteLogo from "../../asset/charente_maritime.webp";
import TrembladeLogo from "../../asset/tremblade.webp";

import Banner from "../../components/Banner/Banner";
import PartnerTitle from "../../components/PartnerTitle/PartnerTitle";
import PartnerItem from "../../components/PartnerItem/PartnerItem";
import Plaquette from "../../components/Plaquette/Plaquette";

function Partner() {
  const BannerImg = BannerImage;
  const BannerAlt = "Logos de nos partenaires sur un paysage";
  const BannerTitle = "Nos Partenaires";
  const VIPPartnerTitle =
    "Ils ont cru en l'aventure — nos partenaires qui font de La Tournée des Plages un événement d'exception.";
  const VIPPartnerList = [
    {
      id: "01",
      name: "Burger King",
      logo: BKLogo,
      link: "https://www.burgerking.fr/restaurant/royan?yandex-source=touch-maps",
    },
    {
      id: "02",
      name: "Zoo de La Palmyre",
      logo: ZooPalmyreLogo,
      link: "https://www.zoo-palmyre.fr/fr",
    },
    {
      id: "03",
      name: "Le Rancho",
      logo: RanchoLogo,
      link: "https://www.lerancho.fr/",
    },
    {
      id: "04",
      name: "Coolongalook",
      logo: CoolongalookLogo,
      link: "https://coolongalook-parc-aventure.com/",
    },
    {
      id: "05",
      name: "Intermarche Vaux sur Mer",
      logo: InterLogo,
      link: "https://www.intermarche.com/magasins/09389/vaux-sur-mer-17640/infos-pratiques?srsltid=AfmBOopZ4eFPNfP_bCPZ5_aWe4oxto1Pd_3pUW3PLVy8D2ljtx0KXiPz",
    },
    {
      id: "06",
      name: "Family Fun Park",
      logo: FamilyLogo,
      link: "https://www.familyfunpark.fr/",
    },
    {
      id: "07",
      name: "Huîtres Peponnette",
      logo: PeponnetteLogo,
      link: "https://www.huitres-peponnet.com/",
    },
    {
      id: "08",
      name: "Domaine Gardrat",
      logo: GardratLogo,
      link: "https://www.domaine-gardrat.fr/accueil.html",
    },
    {
      id: "09",
      name: "BC Autos",
      logo: BCLogo,
      link: "https://www.facebook.com/bc.automobiles.saintes/?locale=fr_FR",
    },
    {
      id: "10",
      name: "Valdec Acheminement Service",
      logo: ValdecLogo,
      link: "https://valdec-assistance.com/",
    },
    {
      id: "11",
      name: "Eden Villages",
      logo: EdenLogo,
      link: "https://www.eden-villages.fr/?gad_source=1&gad_campaignid=22110224831&gbraid=0AAAAADnpUiqMH699mVLo-xOV3ht-n_dvD&gclid=CjwKCAjwsZPDBhBWEiwADuO6y8dKDbF88SdUZt3lotO3r1hjhiTjcXWd6DE3Y62sW_ypt6i7xgLXcxoCYiYQAvD_BwE",
    },
    {
      id: "12",
      name: "Casino Barrière",
      logo: CasinoLogo,
      link: "https://www.casinosbarriere.com/royan",
    },
    {
      id: "13",
      name: "Bepi Conseil",
      logo: Bepi,
      link: "#",
    },
    {
      id: "14",
      name: "Minute Sucré Salé",
      logo: SucreSale,
      link: "https://mssroyan.fr/",
    },
  ];
  const PublicPartnerTitle =
    "Parce que le sport rassemble — les collectivités de Charente-Maritime nous font confiance.";
  const PublicPartnerList = [
    {
      id: "15",
      name: "Ville de Royan",
      logo: RoyanLogo,
      link: "https://www.ville-royan.fr/",
    },
    {
      id: "16",
      name: "Ville de Vaux sur Mer",
      logo: VauxLogo,
      link: "https://www.vaux-sur-mer.fr/",
    },
    {
      id: "17",
      name: "Ville de La Palmyre Les Mathes",
      logo: PalmyreLogo,
      link: "https://mairie-lesmatheslapalmyre.com/",
    },
    {
      id: "18",
      name: "Ville de Saint-Georges de Didonne",
      logo: SaintGeorgesLogo,
      link: "https://www.saintgeorgesdedidonne.fr/",
    },
    {
      id: "19",
      name: "Saint-Palais sur Mer",
      logo: SaintPalaisLogo,
      link: "https://www.stpalaissurmer.fr/",
    },
    {
      id: "20",
      name: "Ville de Meschers sur Gironde",
      logo: MeschersLogo,
      link: "https://www.meschers.com/",
    },
    {
      id: "21",
      name: "Office de Tourisme Communautaire Royan Atlantique",
      logo: RoyanAtlantiqueLogo,
      link: "https://www.royanatlantique.fr/",
    },
    {
      id: "22",
      name: "Charente-Maritime",
      logo: CharenteLogo,
      link: "https://la.charente-maritime.fr/",
    },
    {
      id: "23",
      name: "La Tremblade",
      logo: TrembladeLogo,
      link: "https://www.la-tremblade.fr/",
    },
  ];

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="partner-plaquette-container">
        <Plaquette />
      </section>
      <section className="partner-list-container">
        <PartnerTitle title={VIPPartnerTitle} />
        <div className="partner-partner-container">
          {VIPPartnerList.map(({ id, name, logo, link }) => (
            <article
              key={id}
              className="partner-partnercontainer"
            >
              <PartnerItem name={name} logo={logo} link={link} />
            </article>
          ))}
        </div>
        <PartnerTitle title={PublicPartnerTitle} />
        <div className="partner-partner-container">
          {PublicPartnerList.map(({ id, name, logo, link }) => (
            <article
              key={id}
              className="partner-partnercontainer"
            >
              <PartnerItem name={name} logo={logo} link={link} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Partner;
