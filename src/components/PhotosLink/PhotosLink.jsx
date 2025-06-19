import "./PhotoLink.css";

import Carousel1 from "../../asset/caroussel-1.webp";
import Carousel2 from "../../asset/caroussel-2.webp";
import Carousel3 from "../../asset/caroussel-3.webp";
import Carousel4 from "../../asset/caroussel-4.webp";
import Carousel5 from "../../asset/caroussel-5.webp";
import Carousel6 from "../../asset/caroussel-6.webp";
import Carousel7 from "../../asset/caroussel-7.webp";

function PhotoLink() {
  const carouselimg1 = [Carousel1, Carousel2, Carousel3, Carousel1];
  const carouselimg2 = [Carousel4, Carousel5, Carousel6, Carousel4];
  const carouselimg3 = [Carousel7, Carousel1, Carousel6, Carousel7];

  return (
    <section className="carousel-container">
      <div className="carousel-relative-container">
        <div className="carousel-relative carousel1">
          <div className="carousel-track">
            {[...carouselimg1].map((img, index) => (
              <img key={index} src={img} alt={`Slide ${(index % 10) + 1}`} />
            ))}
          </div>
          <div className="carousel-borderleft"></div>
          <div className="carousel-borderright"></div>
          <div className="carousel-bordertop"></div>
          <div className="carousel-borderbottom">smash</div>
        </div>
        <div className="carousel-relative carousel2">
          <div className="carousel-track">
            {[...carouselimg2].map((img, index) => (
              <img key={index} src={img} alt={`Slide ${(index % 10) + 1}`} />
            ))}
          </div>
          <div className="carousel-borderleft"></div>
          <div className="carousel-borderright"></div>
          <div className="carousel-bordertop"></div>
          <div className="carousel-borderbottom">that</div>
        </div>
        <div className="carousel-relative carousel3">
          <div className="carousel-track">
            {[...carouselimg3].map((img, index) => (
              <img key={index} src={img} alt={`Slide ${(index % 10) + 1}`} />
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
