import "./TournementFilter.css";

import { useState } from "react";
import TournementItem from "../TournementItem/TournementItem";

function TournementFilter({ tournementList }) {
  const [filters, setFilters] = useState({
    locCity: "",
    date: "",
    categorie: "",
    DJ: "",
  });

  // Fonction pour mettre à jour les filtres
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fonction pour filtrer la liste des tournois
  const filteredTournaments = tournementList.filter((tournament) => {
    const matchCity = filters.locCity
      ? tournament.locCity === filters.locCity
      : true;
    const matchDate = filters.date ? tournament.date === filters.date : true;
    const matchCategorie = filters.categorie
      ? tournament.categories.includes(filters.categorie)
      : true;
    const matchDJ = filters.DJ
      ? tournament.DJ === (filters.DJ === "true")
      : true;

    return matchCity && matchDate && matchCategorie && matchDJ;
  });

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setFilters({
      locCity: "",
      date: "",
      categorie: "",
      DJ: "",
    });
  };

  return (
    <div className="tournamentFilter-container">
      <div className="filter-container">
        {/* Libellé ajouté pour le filtre de ville */}
        <label htmlFor="filter-locCity" className="visually-hidden">Filtrer par ville</label>
        <select
          name="locCity"
          id="filter-locCity" // Ajout de l'ID correspondant au 'for' du label
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

        {/* Libellé ajouté pour le filtre de date */}
        <label htmlFor="filter-date" className="visually-hidden">Filtrer par date</label>
        <select
          name="date"
          id="filter-date" // Ajout de l'ID correspondant au 'for' du label
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

        {/* Libellé ajouté pour le filtre de catégorie */}
        <label htmlFor="filter-categorie" className="visually-hidden">Filtrer par catégorie</label>
        <select
          name="categorie"
          id="filter-categorie" // Ajout de l'ID correspondant au 'for' du label
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

        {/* Le bouton Reset n'est pas un champ de formulaire interactif nécessitant un label de cette manière */}
        <button onClick={resetFilters}>Reset</button>
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

