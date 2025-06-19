import "./Caroussel.css";

import { useEffect, useState } from "react";
import Carousel1 from "../../asset/caroussel-1_mobil.webp";
import Carousel2 from "../../asset/caroussel-2_mobil.webp";
import Carousel3 from "../../asset/caroussel-3_mobil.webp";
import Carousel4 from "../../asset/caroussel-4_mobil.webp";

const images = [Carousel1, Carousel2, Carousel3, Carousel4];

function Caroussel() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Change automatiquement toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const changeSlide = (n) => {
    setSlideIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex < 0) return images.length - 1;
      return newIndex % images.length;
    });
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="caroussel-container">
      <div className="caroussel-slideshadow-container">
        {images.map((image, index) => (
          <div
            className={`caroussel-slide ${
              index === slideIndex ? "active" : ""
            }`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <div className="caroussel-controls">
        <div className="caroussel-previous" onClick={() => changeSlide(-1)}>
          &#8592;
        </div>
        <div className="caroussel-next" onClick={() => changeSlide(1)}>
          &#8594;
        </div>

        <div className="caroussel-slideprogress">
          {images.map((_, index) => (
            <span
              key={index}
              className={`caroussel-dot ${
                index === slideIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
