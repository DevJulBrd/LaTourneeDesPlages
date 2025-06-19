import "./Coments.css";

import { useState, useEffect } from "react";

const comentsList = [
  {
    id: "0",
    name: "Sébastien Frangolacci 47 ans",
    coment:
      "Je venais quand j'étais enfant avec mes parents et maintenant, je viens avec mes enfants. Ce que j'aime avec la Tournée des Plages, c'est la convivialité et le niveau de jeu. II y a de bons volleyeurs qui y jouent et qui évoluent maintenant dans de gros championnats.",
  },
  {
    id: "1",
    name: "Nicolas 19 ans",
    coment: `J'habite Paris et je fais du volleyball en N3. Je viens en vacances ici et je participe chaque été à la Tournée des Plages.
  L'ambiance est super familiale. On s'y fait plein de potes et après on constitue de nouvelles équipes. C'est génial!`,
  },
  {
    id: "2",
    name: "Emma 16 ans",
    coment:
      "J'habite à Saintes où je joue en N3. Ce que j'adore sur la Tournée des Plages, c'est la bonne ambiance !",
  },
  {
    id: "3",
    name: "Maxime 14 ans",
    coment:
      "Je joue en club dans la Drôme au niveau régional. J'ai participé au tournoi de la Tournée des Plages à Pontaillac en 2022. J'ai eu la chance d'obtenir un ballon dédicacé par mon joueur préféré, Trévor Clévenot !",
  },
];

function CommentCarousel() {
  const [comentIndex, setComentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setComentIndex((prevIndex) => (prevIndex + 1) % comentsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeSlide = (n) => {
    setComentIndex((prevIndex) => {
      const newIndex = prevIndex + n;
      if (newIndex < 0) return comentsList.length - 1;
      return newIndex % comentsList.length;
    });
  };

  return (
    <div className="coments-container">
      <div className="coments-slideshadow-container">
        {comentsList.map((coment, index) => (
          <div
            className={`coments-slide ${index === comentIndex ? "active" : ""}`}
            key={coment.id}
          >
            <div className="coments-coment">{coment.coment}</div>
            <div className="coments-name">{coment.name}</div>
          </div>
        ))}
      </div>
      <div className="coments-controls">
        <div className="coments-previous" onClick={() => changeSlide(-1)}>
          &#8592;
        </div>
        <div className="coments-next" onClick={() => changeSlide(1)}>
          &#8594;
        </div>
      </div>
    </div>
  );
}

export default CommentCarousel;
