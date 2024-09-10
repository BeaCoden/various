import React from "react";
import "./Header.css";

const Header = ({ query, setQuery, selectedMeal, setSelectedMeal, mealTypes, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="headerWrapper">
      <h1>Koch dir was...</h1>
      <div className="searchWrapper">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Zutat eintragen"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            name="mealType"
            id="mealType"
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}>
            <option
              value=""
              disabled>
              Mahlzeit wählen
            </option>
            {mealTypes.map((mealType, index) => (
              <option
                key={index}
                value={mealType}>
                {mealType}
              </option>
            ))}
          </select>
          <button type="submit" >Rezept suchen</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
