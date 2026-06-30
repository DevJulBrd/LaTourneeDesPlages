import "./Registration.css";

import BannerImage from "../../asset/banner_inscription.webp";
import Banner from "../../components/Banner/Banner";
import AppLink from "../../components/AppLink/AppLink";

function Registration() {
  const BannerImg = BannerImage;
  const BannerAlt = "Bannière de la page d'inscription au tournoi";
  const BannerTitle = "Inscrivez-vous";

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="registration-container">
        <AppLink />
      </section>
    </div>
  );
}

export default Registration;
