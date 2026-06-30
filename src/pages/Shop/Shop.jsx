import "./Shop.css";

import Banner from "../../components/Banner/Banner";
import BannerImage from "../../asset/banner_shop.webp";

function Shop() {
  const BannerImg = BannerImage;
  const BannerAlt = "Bannière de la boutique Smash That Beach";
  const BannerTitle = "Boutique";

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="shop-container">
        <p>Ça arrive bientôt. Restez connectés !</p>
      </section>
    </div>
  );
}

export default Shop;
