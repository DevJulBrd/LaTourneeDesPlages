import "./PhotoLink.css";

import Photo01 from "../../asset/photo-01.webp";
import Photo02 from "../../asset/photo-02.webp";
import Photo03 from "../../asset/photo-03.webp";
import Photo04 from "../../asset/photo-04.webp";
import Photo05 from "../../asset/photo-05.webp";
import Photo06 from "../../asset/photo-06.webp";
import Photo07 from "../../asset/photo-07.webp";
import Photo08 from "../../asset/photo-08.webp";
import Photo09 from "../../asset/photo-09.webp";

function PhotoLink() {
  const carouselimg1 = [Photo01, Photo02, Photo03, Photo01];
  const carouselimg2 = [Photo04, Photo05, Photo06, Photo04];
  const carouselimg3 = [Photo07, Photo08, Photo09, Photo07];

  return (
    <section className="carousel-container">
      <div className="carousel-relative-container">
        <div className="carousel-relative carousel1">
          <div className="carousel-track">
            {carouselimg1.map((img, index) => (
              <img key={index} src={img} alt="Photo du tournoi de beach-volley" />
            ))}
          </div>
          <div className="carousel-borderleft"></div>
          <div className="carousel-borderright"></div>
          <div className="carousel-bordertop"></div>
          <div className="carousel-borderbottom">smash</div>
        </div>
        <div className="carousel-relative carousel2">
          <div className="carousel-track">
            {carouselimg2.map((img, index) => (
              <img key={index} src={img} alt="Photo du tournoi de beach-volley" />
            ))}
          </div>
          <div className="carousel-borderleft"></div>
          <div className="carousel-borderright"></div>
          <div className="carousel-bordertop"></div>
          <div className="carousel-borderbottom">that</div>
        </div>
        <div className="carousel-relative carousel3">
          <div className="carousel-track">
            {carouselimg3.map((img, index) => (
              <img key={index} src={img} alt="Photo du tournoi de beach-volley" />
            ))}
          </div>
          <div className="carousel-borderleft"></div>
          <div className="carousel-borderright"></div>
          <div className="carousel-bordertop"></div>
          <div className="carousel-borderbottom">beach !</div>
        </div>
      </div>
    </section>
  );
}

export default PhotoLink;
