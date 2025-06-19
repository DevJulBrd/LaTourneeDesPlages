import "./Carte.css";

import Cart from "../../asset/cart-cost.webp";
import PlagePalmyre from "../../asset/plage-palmyre.webp";
import PlageVaux from "../../asset/nauzan-beach.webp";
import PlageRoyan from "../../asset/caroussel-7.webp";
import PlageStGeorges from "../../asset/stgeorge_beach.webp";
import PlageMeschers from "../../asset/meschers_beach.webp";

function Carte() {
  return (
    <section className="home-cart-container">
      <div className="home-cart-relative-container">
        <img
          src={Cart}
          alt={
            "Carte de la France avec un zoom sur la côte Est entre l'île d'Oléron et Meschers sur Gironde"
          }
          className="home-cart-cart"
        />
        <div className="to-hover1">
          <div className="home-cart-point1"></div>
          <div className="home-cart-city1 contrail">
            Les Mathes <br /> La Palmyre
          </div>
          <div className="home-cart-info-container1">
            <img
              src={PlagePalmyre}
              alt="Paysage de la plage de La Palmyre les Mathes"
              className="img-plage"
            />
            <h3 className="home-cart-info-title contrail">
              Plage de La Palmyre
            </h3>
            <p className="home-cart-info roboto">
              Dates : 10 Juillet / 24 Juillet / 16 Août / 17 Août
            </p>
          </div>
          <div className="triangle1"></div>
        </div>
        <div className="to-hover2">
          <div className="home-cart-point2"></div>
          <div className="home-cart-city2 contrail">
            St-Palais <br /> Vaux sur mer
          </div>
          <div className="home-cart-none home-cart-info-container2">
            <img
              src={PlageVaux}
              alt="Paysage de la plage de Vaux-sur-mer"
              className="img-plage"
            />
            <h3 className="home-cart-info-title contrail">Plage de Nauzan</h3>
            <p className="home-cart-info roboto">
              Dates : 17 Juillet / 26 Juillet / 27 Juillet / 31 Juillet / 12
              Août
            </p>
          </div>
          <div className="home-cart-none triangle2"></div>
        </div>
        <div className="to-hover4">
          <div className="home-cart-point4"></div>
          <div className="home-cart-city4 contrail">Royan</div>
          <div className="home-cart-none home-cart-info-container4 tall">
            <img
              src={PlageRoyan}
              alt="Paysage de la plage de la Grande Conche à royan"
              className="img-plage"
            />
            <h3 className="home-cart-info-title contrail">
              Plage de la Grande Conche / Plage de Pontaillac
            </h3>
            <p className="home-cart-info roboto">
              Dates : 12 Juillet / 13 Juillet / 29 Juillet / 7 Août / 9 Août /
              10 Août / 14 Août
            </p>
          </div>
          <div className="home-cart-none triangle4"></div>
        </div>
        <div className="to-hover5">
          <div className="home-cart-point5"></div>
          <div className="home-cart-city5 contrail">
            St-Georges <br />
            de-Didonne
          </div>
          <div className="home-cart-none home-cart-info-container5">
            <img
              src={PlageStGeorges}
              alt="Paysage de la plage de Saint-Georges de Didonne"
              className="img-plage"
            />
            <h3 className="home-cart-info-title contrail">
              Plage de la Conche Nord
            </h3>
            <p className="home-cart-info roboto">
              Dates : 15 Juillet / 22 Juillet / 2 Août / 3 Août
            </p>
          </div>
          <div className="home-cart-none triangle5"></div>
        </div>
        <div className="to-hover6">
          <div className="home-cart-point6"></div>
          <div className="home-cart-city6  contrail">
            <div className="home-cart-none triangle6"></div>
            Meschers <br />
            sur Gironde
          </div>
          <div className="home-cart-none home-cart-info-container6 talls">
            <img
              src={PlageMeschers}
              alt="Paysage de la plage de Meschers sur Gironde"
              className="img-plage"
            />
            <h3 className="home-cart-info-title contrail">
              Plage des Nonnes / Plage de Suzac
            </h3>
            <p className="home-cart-info roboto">
              Dates : 19 Juillet / 20 Juillet / 5 Août
            </p>
          </div>
          <div className="home-cart-none triangle6"></div>
        </div>
      </div>
    </section>
  );
}

export default Carte;
