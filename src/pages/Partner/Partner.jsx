import "./Partner.css";

import BannerImage from "../../asset/caroussel-1.webp";
import BKLogo from "../../asset/burger-king.webp";
import ZooPalmyreLogo from "../../asset/zoo-de-la-palmyre.webp";
import RanchoLogo from "../../asset/rancho.webp";
import CoolongalookLogo from "../../asset/coolongalook.webp";
import InterLogo from "../../asset/inter-marche.webp";
import FamilyLogo from "../../asset/family-fun-park.webp";
import SealyosLogo from "../../asset/sealyos.webp";
import GardratLogo from "../../asset/domaine-gardrat.webp";
import RoyanLogo from "../../asset/royan.webp";
import VauxLogo from "../../asset/vaux.webp";
import PalmyreLogo from "../../asset/la-palmyre.webp";
import SaintGeorgesLogo from "../../asset/saint-georges.webp";
import SaintPalaisLogo from "../../asset/saint-palais.webp";
import MeschersLogo from "../../asset/meschers.webp";
import RoyanAtlantiqueLogo from "../../asset/royan-atlantique.webp";

import Banner from "../../components/Banner/Banner";
import PartnerTitle from "../../components/PartnerTitle/PartnerTitle";
import PartnerItem from "../../components/PartnerItem/PartnerItem";
import ContactForm from "../../components/FormPartner/FormPartner";
import Title from "../../components/Title/Title";
import Plaquette from "../../components/Plaquette/Plaquette";

function Partner() {
  const BannerImg = BannerImage;
  const BannerAlt = "Logos de nos partenaires sur un paysage";
  const BannerTitle = "Nos Parenaires";
  const VIPPartnerTitle =
    "Ils nous accompagnent déjà et nous sommes fiers de partager cette aventure avec eux";
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
      name: "Sealyos",
      logo: SealyosLogo,
      link: "https://sealyos.fr/",
    },
    {
      id: "08",
      name: "Domaine Gardrat",
      logo: GardratLogo,
      link: "https://www.domaine-gardrat.fr/accueil.html",
    },
  ];
  const PublinPartnerTitle =
    "Nous comptons également sur l'appui et le soutien de nos collectivités";
  const PublicPartnerList = [
    {
      id: "09",
      name: "Ville de Royan",
      logo: RoyanLogo,
      link: "https://www.ville-royan.fr/",
    },
    {
      id: "10",
      name: "Ville de Vaux sur Mer",
      logo: VauxLogo,
      link: "https://www.vaux-sur-mer.fr/",
    },
    {
      id: "11",
      name: "Ville de La Palmyre Les Mathes",
      logo: PalmyreLogo,
      link: "https://mairie-lesmatheslapalmyre.com/",
    },
    {
      id: "12",
      name: "Ville de Saint-Georges de Didonne",
      logo: SaintGeorgesLogo,
      link: "https://www.saintgeorgesdedidonne.fr/",
    },
    {
      id: "13",
      name: "Saint-Palais sur Mer",
      logo: SaintPalaisLogo,
      link: "https://www.stpalaissurmer.fr/",
    },
    {
      id: "14",
      name: "Ville de Meschers sur Gironde",
      logo: MeschersLogo,
      link: "https://www.meschers.com/",
    },
    {
      id: "15",
      name: "Office de Tourisme Communautaire Royan Atlantique",
      logo: RoyanAtlantiqueLogo,
      link: "https://www.royanatlantique.fr/",
    },
  ];
  const TitleContact =
    "Vous souhaitez nous rejoindre ? Envoyez-nous un message";

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="partner-list-container">
        <PartnerTitle title={VIPPartnerTitle} />
        <div className="partner-partner-container">
          {VIPPartnerList.map(({ index, id, name, logo, link }) => (
            <article
              key={`${id}-${index}`}
              className="partner-partnercontainer"
            >
              <PartnerItem name={name} logo={logo} link={link} />
            </article>
          ))}
        </div>
        <PartnerTitle title={PublinPartnerTitle} />
        <div className="partner-partner-container">
          {PublicPartnerList.map(({ index, id, name, logo, link }) => (
            <article
              key={`${id}-${index}`}
              className="partner-partnercontainer"
            >
              <PartnerItem name={name} logo={logo} link={link} />
            </article>
          ))}
        </div>
      </section>
      <section className="partner-plaquette-container">
        <Plaquette />
      </section>
      <section className="partner-form-container">
        <Title title={TitleContact} />
        <ContactForm />
      </section>
    </div>
  );
}

export default Partner;
