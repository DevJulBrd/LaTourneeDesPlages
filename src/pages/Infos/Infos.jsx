import "./Infos.css";

import BannerImage from "../../asset/banner_info.webp";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import FormInfos from "../../components/FormInfos/FormInfos";

function Infos() {
  const BannerImg = BannerImage;
  const BannerAlt = "Logos de nos partenaire sur un paysage";
  const BannerTitle = "Informaions Praiques";
  const PriceTitle = "Tarifs & Inscriptions*";
  const SnackTitle = "Se restaurer sur place";
  const LocTitle = "Comment s’y rendre ? Nos plages étapes :";
  const FormInfosTitle = "Postule pour faire partie de l'organisation";

  return (
    <div>
      <Banner img={BannerImg} alt={BannerAlt} title={BannerTitle} />
      <section className="infos-text-container">
        <Title title={PriceTitle} />
        <h3 className="infos-rubric">- Tournois classiques</h3>
        <p className="infos-text">Tarifs: 7€ mineurs / 9€ adultes</p>
        <h3 className="infos-rubric">- Tournois masters</h3>
        <p className="infos-text">Tarifs: 8€ mineurs / 12€ adultes</p>
        <p className="infos-text">
          <i className="fas fa-triangle-exclamation warning-icon infos-color"></i>
          Initiations gratuites tous les matins ! Idéal pour découvrir le
          beach-volley ou se remettre dans le bain.
        </p>
        <h3 className="infos-rubric">- Comment s'inscrire ?</h3>
        <ul className="infos-text infos-list-container">
          <li className="infos-text">
            <i className="fas fa-laptop laptop-icon infos-color"></i>En ligne,
            directement sur notre site
          </li>
          <li className="infos-text">
            <i className="fas fa-pen-to-square note-icon infos-color"></i>Sur
            place, le jour J entre 10h et 11h{" "}
            <span className="infos-italic">
              (dans la limite des places disponibles)
            </span>
          </li>
        </ul>
        <p className="infos-text infos-margin">
          *Paiement possible en carte bancaire ou en espèces
        </p>
        <Title title={SnackTitle} />
        <p className="infos-text infos-margin">
          Pour reprendre des forces entre deux matchs, rien de mieux que la
          buvette de la TDP ! Au menu : les fameux hot-dogs, les croq-monsieurs
          croustillants, des snacks salés, des smoothies, et de la bonne humeur
          !
        </p>
        <Title title={LocTitle} />
        <p className="infos-text">
          Voici les spots de rêve où poser ta serviette et ton short de sport !
          Pour chaque date de la tournée, retrouve-nous sur l’une de ces plages
          mythiques :
        </p>
        <ul className="infos-text infos-list-container">
          <li className="infos-text infos-list">
            <i className="fas fa-thumbtack pin-icon infos-color"></i>
            <span className="infos-beach-name">Plage de La Palmyre</span> <br />
            Avenue de la Palmyre, 17570 Les Mathes (45.682301, -1.178602)
          </li>
          <li className="infos-text infos-list">
            <i className="fas fa-thumbtack pin-icon infos-color"></i>
            <span className="infos-beach-name">Plage de Nauzan</span> <br />
            Boulevard de la Côte de Beauté, 17420 Saint-Palais-sur-Mer
            (45.645595, -1.088434)
          </li>
          <li className="infos-text infos-list">
            <i className="fas fa-thumbtack pin-icon infos-color"></i>
            <span className="infos-beach-name">Plage de Pontaillac</span> <br />
            Boulevard de la Côte d’Argent, 17200 Royan (45.631289, -1.067221)
          </li>
          <li className="infos-text infos-list">
            <i className="fas fa-thumbtack pin-icon infos-color"></i>
            <span className="infos-beach-name">
              Plage de la Grande Conche - Royan
            </span>{" "}
            <br />
            Front de Mer, 17200 Royan (45.619732, -1.033842)
          </li>
          <li className="infos-text infos-list">
            <i className="fas fa-thumbtack pin-icon infos-color"></i>
            <span className="infos-beach-name">
              Plage de Saint-Georges-de-Didonne
            </span>{" "}
            <br />
            Entre le Café des Bains et le Club Nautique (45.607951, -1.015873)
          </li>
          <li className="infos-text infos-list">
            <i className="fas fa-thumbtack pin-icon infos-color"></i>
            <span className="infos-beach-name">Plage des Nonnes</span> <br />
            Accès via rue du Fief des Sables (places gratuites pour stationner)
            puis rejoindre la plage à pied en descendant les marches menant à
            l’accès Bikki Beach (45.578402, -1.010390)
          </li>
          <li className="infos-text infos-list infos-margin">
            <i className="fas fa-thumbtack pin-icon infos-color"></i>
            <span className="infos-beach-name">Plage des Vergnes</span> <br />
            Côté restaurant Baignassout, accès via l’Avenue des Vergnes,
            (parking gratuit au bout de l’avenue) (45.573843, -1.006428)
          </li>
        </ul>
        <h2 className="infos-title-spe">
          La Boutique Officielle –{" "}
          <span className="infos-nectarine">SMASH THAT BEACH</span>
        </h2>
        <p className="infos-text infos-margin">
          Envie de repartir avec un souvenir stylé de la TDP ? Passe par notre
          boutique officielle sur place et découvre les produits de notre marque
          100% beach : <span className="infos-nectarine">SMASH THAT BEACH</span>{" "}
          <i className="fas fa-fire flame-icon red"></i> Design cool, matières
          de qualité, vibes estivales garanties{" "}
          <i className="fas fa-sun sun-icon yellow"></i> Idéal pour afficher ton
          style sur le sable… et bien après le tournoi.
        </p>
      </section>
      <section className="infos-formInfos-container">
        <Title title={FormInfosTitle} />
        <FormInfos />
      </section>
    </div>
  );
}

export default Infos;
