import "./TournementFilter.css";

import { useState } from "react";
import TournementItem from "../TournementItem/TournementItem";

function TournementFilter({ tournementList }) {
  const [filters, setFilters] = useState({
    locCity: "",
    date: "",
    categorie: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredTournaments = tournementList.filter((tournament) => {
    const matchCity = filters.locCity
      ? tournament.locCity === filters.locCity
      : true;
    const matchDate = filters.date ? tournament.date === filters.date : true;
    const matchCategorie = filters.categorie
      ? tournament.categories.includes(filters.categorie)
      : true;

    return matchCity && matchDate && matchCategorie;
  });

  const resetFilters = () => {
    setFilters({
      locCity: "",
      date: "",
      categorie: "",
    });
  };

  return (
    <div className="tournamentFilter-container">
      <div className="filter-container">
        <label htmlFor="filter-locCity" className="visually-hidden">Filtrer par ville</label>
        <select
          name="locCity"
          id="filter-locCity"
          onChange={handleFilterChange}
          value={filters.locCity}
        >
          <option value="">Toutes les villes</option>
          {[...new Set(tournementList.map((t) => t.locCity))].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <label htmlFor="filter-date" className="visually-hidden">Filtrer par date</label>
        <select
          name="date"
          id="filter-date"
          onChange={handleFilterChange}
          value={filters.date}
        >
          <option value="">Toutes les dates</option>
          {[...new Set(tournementList.map((t) => t.date))].map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <label htmlFor="filter-categorie" className="visually-hidden">Filtrer par catégorie</label>
        <select
          name="categorie"
          id="filter-categorie"
          onChange={handleFilterChange}
          value={filters.categorie}
        >
          <option value="">Toutes les catégories</option>
          {[...new Set(tournementList.flatMap((t) => t.categories))].map(
            (cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )
          )}
        </select>

        <button onClick={resetFilters}>Reset</button>
      </div>

      <div className="neoscore-info">
        <div className="neoscore-info-header">
          <span className="neoscore-info-title">Inscriptions en ligne</span>
          <span className="neoscore-info-subtitle">via l'app Neoscore</span>
        </div>
        <p className="neoscore-info-text">
          Clique sur les catégories&nbsp;
          <span className="neoscore-badge hommes">Hommes</span>
          <span className="neoscore-badge femmes">Femmes</span>
          <span className="neoscore-badge loisirs">Loisirs</span>
          &nbsp;pour t'inscrire directement dans l'application.
        </p>
        <div className="neoscore-info-stores">
          <a
            href="https://apps.apple.com/fr/app/neoscore/id6747252671"
            target="_blank"
            rel="noopener noreferrer"
            className="neoscore-store-link"
          >
            ⬇ App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.digimeo.neoscore&utm_source=emea_Med"
            target="_blank"
            rel="noopener noreferrer"
            className="neoscore-store-link"
          >
            ⬇ Google Play
          </a>
        </div>
      </div>

      <div className="tournamentFilter-list">
        {filteredTournaments.length > 0 ? (
          filteredTournaments.map((tournament) => (
            <TournementItem key={tournament.id} {...tournament} />
          ))
        ) : (
          <p className="tournamentFilter-none">
            Aucun tournoi ne correspond aux filtres sélectionnés.
          </p>
        )}
      </div>
    </div>
  );
}

export default TournementFilter;
