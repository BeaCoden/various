import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import chefIcon from "../../assets/img/chefIcon.png";
import kitchenIsland from "../../assets/img/kitchenIsland.png";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState(null);
  const [showInfo, setShowInfo] = useState(true);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime", "any"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackClick = () => {
    setShowInfo(false);
    window.location.reload();
  };

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      />
      {!recipes && (
        <div className="homeScene">
          <img
            className="kitchenIslandIcon"
            src={kitchenIsland}
            alt="kitchenIsland"
          />
          <img
            className="chefIcon"
            src={chefIcon}
            alt="chef"
          />
        </div>
      )}
      {recipes?.length === 0 && showInfo && (
        <div className="noRecipes">
          <h6>
            <em>
              Keine Rezepte gefunden, <br /> versuch eine andere Zutat.
            </em>
          </h6>
          <button
            className="backBtn"
            onClick={handleBackClick}>
            zurück
          </button>
        </div>
      )}
      {recipes?.length > 0 && <Card recipes={recipes} />}
    </div>
  );
};

export default Home;
