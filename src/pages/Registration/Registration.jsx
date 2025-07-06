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
        <neoscore-widget widgetIdentifier="ekdj763DIudci7DFsxk938EYRTGFHcvueD8ZHCi"></neoscore-widget>
      </section>
    </div>
  );
}

export default Registration;
