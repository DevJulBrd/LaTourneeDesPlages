import "./Footer.css";

import BKLogoMobil from "../../asset/burger-king_footer.webp";
import ZooPalmyreLogoMobil from "../../asset/zoo-de-la-palmyre_footer.webp";
import RanchoLogoMobil from "../../asset/rancho_footer.webp";
import CoolongalookLogoMobil from "../../asset/coolongalook_footer.webp";
import BKLogo from "../../asset/burger-king.webp";
import ZooPalmyreLogo from "../../asset/zoo-de-la-palmyre.webp";
import RanchoLogo from "../../asset/rancho.webp";
import CoolongalookLogo from "../../asset/coolongalook.webp";
import OTCLogo from "../../asset/royan-atlantique.webp";
import RoyanLogo from "../../asset/royan.webp";
import VauxLogo from "../../asset/vaux.webp";
import PalmyreLogo from "../../asset/la-palmyre.webp";
import SaintGeorgesLogo from "../../asset/saint-georges.webp";
import SaintPalaisLogo from "../../asset/saint-palais.webp";
import MeschersLogo from "../../asset/meschers.webp";
import OTCLogoMobil from "../../asset/royan-atlantique_mobil.webp";
import RoyanLogoMobil from "../../asset/royan_mobil.webp";
import VauxLogoMobil from "../../asset/vaux_mobil.webp";
import SaintGeorgesLogoMobil from "../../asset/saint-georges_mobil.webp";
import SaintPalaisLogoMobil from "../../asset/saint-palais_mobil.webp";
import CharenteLogo from "../../asset/charente_maritime.webp"
import MeschersLogoMobil from "../../asset/meschers_mobil.webp";
import Pirate from "../../asset/pirate.webp";

import { useState, useEffect } from "react";
import "../Fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterPartner from "../FooterPartner/FooterPartner";
import CarousselFooter from "../CarousselFooter/CarousselFooter";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const PartnerFooterMobil = [
    {
      id: "01",
      name: "Burger King",
      logo: BKLogoMobil,
      link: "https://www.burgerking.fr/restaurant/royan?yandex-source=touch-maps",
    },
    {
      id: "02",
      name: "Zoo de La Palmyre",
      logo: ZooPalmyreLogoMobil,
      link: "https://www.zoo-palmyre.fr/fr",
    },
    {
      id: "03",
      name: "Le Rancho",
      logo: RanchoLogoMobil,
      link: "https://www.lerancho.fr/",
    },
    {
      id: "04",
      name: "Coolongalook",
      logo: CoolongalookLogoMobil,
      link: "https://coolongalook-parc-aventure.com/",
    },
  ];
  const PartnerFooter = [
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
  ];
  const CityFooterMobil = [
    {
      id: "09",
      name: "Ville de Royan",
      logo: RoyanLogoMobil,
      link: "https://www.ville-royan.fr/",
    },
    {
      id: "10",
      name: "Ville de Vaux sur Mer",
      logo: VauxLogoMobil,
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
      logo: SaintGeorgesLogoMobil,
      link: "https://www.saintgeorgesdedidonne.fr/",
    },
    {
      id: "13",
      name: "Saint-Palais sur Mer",
      logo: SaintPalaisLogoMobil,
      link: "https://www.stpalaissurmer.fr/",
    },
    {
      id: "14",
      name: "Ville de Meschers sur Gironde",
      logo: MeschersLogoMobil,
      link: "https://www.meschers.com/",
    },
    {
      id: "15",
      name: "Office de Tourisme Communautaire Royan Atlantique",
      logo: OTCLogoMobil,
      link: "https://www.royanatlantique.fr/",
    },
    {
      id: "16",
      name: "Charente-Maritime",
      logo: CharenteLogo,
      link: "https://la.charente-maritime.fr/",
    },
  ];
  const CityFooter = [
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
      logo: OTCLogo,
      link: "https://www.royanatlantique.fr/",
    },
    {
      id: "16",
      name: "Charente-Maritime",
      logo: CharenteLogo,
      link: "https://la.charente-maritime.fr/",
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
    <footer className="footer-container">
      <div className="footer-container-infos">
        <div className="footer-contacts-container">
          <nav className="footer-contact-container">
            <ul className="footer-list">
              <li className="footer-contact">
                TEL : 0608609339
              </li>
              <li className="footer-contact">EMAIL : tdp.beach@gmail.com</li>
            </ul>
          </nav>
          <nav>
            <ul className="footer-list footer-icons-container">
              <li className="footer-icon-container">
                <a href="https://www.facebook.com/TDP.BEACH.VOLLEY/" className="footer-icon-link">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="footer-icon footer-fb-icon"
                  />
                  <p className="footer-icon-text">Facebook</p>
                </a>
              </li>
              <li className="footer-icon-container">
                <a href="https://www.instagram.com/tourneedesplagesbeachvolley/?hl=fr" className="footer-icon-link">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="footer-icon footer-instagram-icon"
                  />
                  <p className="footer-icon-text">Instagram</p>
                </a>
              </li>
              <li className="footer-icon-container">
                <a href="https://www.youtube.com/@TOURNEEDESPLAGESBEACHVOLLEY" className="footer-icon-link">
                  <FontAwesomeIcon
                    icon={["fab", "youtube"]}
                    className="footer-icon footer-yt-icon"
                  />
                  <p className="footer-icon-text">Youtube</p>
                </a>
              </li>
              <li>
                <a href="https://royanatlantiquevolleyball.fr/">
                  <img
                    src={Pirate}
                    alt="Logo des pirates du Royan Atantique Volley-Ball"
                    className="footer-pirate"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="footer-partners-container">
          {isMobile ? (
            <ul className="footer-list footer-partner-list">
              {PartnerFooterMobil.map(({ index, id, name, logo, link }) => (
                <li key={`${index}-${id}`} className="footer-partner">
                  <FooterPartner name={name} logo={logo} link={link} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="footer-list footer-partner-list">
              {PartnerFooter.map(({ index, id, name, logo, link }) => (
                <li key={`${index}-${id}`} className="footer-partner">
                  <FooterPartner name={name} logo={logo} link={link} />
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div>
          {isMobile ? (
            <div className="footer-city-wrapper">
              <div className="footer-city-container">
                {[...CityFooterMobil, ...CityFooterMobil].map(
                  ({ index, id, name, logo, link }) => (
                    <div key={`${index}-${id}`} className="footer-city">
                      <CarousselFooter name={name} logo={logo} link={link} />
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="footer-city-wrapper">
              <div className="footer-city-container">
                {[...CityFooter, ...CityFooter].map(
                  ({ index, id, name, logo, link }) => (
                    <div key={`${index}-${id}`} className="footer-city">
                      <CarousselFooter name={name} logo={logo} link={link} />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
