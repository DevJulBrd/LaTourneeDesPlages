import "./Registration.css";

import BannerImage from "../../asset/banner_inscription.webp";
import Banner from "../../components/Banner/Banner";

function Registration() {
  const BannerImg = BannerImage;
  const BannerAlt = "Logos de nos partenaire sur un paysage";
  const BannerTitle = "Inscrivez-vous";

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="registration-container">
        <p>Ça arrive bientôt. Restez connectés !</p>
      </section>
    </div>
  );
}

export default Registration;
