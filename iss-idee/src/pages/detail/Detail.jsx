import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { state } = useLocation();
  const [showExplanation, setShowExplanation] = useState({});

  if (!state || !state.totalNutrients) {
    console.error("No state or nutrient data provided to Detail component");
    return <div>Error: No recipe data available. Please go back and select a recipe.</div>;
  }

  const getNutrientDetails = (nutrient, key) => {
    if (!nutrient || nutrient.quantity === 0) {
      return null;
    }
    const unit = getFriendlyUnit(nutrient.unit);
    return (
      <span>
        {Math.round(nutrient.quantity)} {unit}{" "}
        <button
          onClick={() => toggleExplanation(key)}
          className="info-button"
          aria-label="More info">
          i
        </button>
        {showExplanation[key] && (
          <span className="explanation">
            {getFullUnitName(nutrient.unit)} <button onClick={() => toggleExplanation(key)}>x</button>
          </span>
        )}
      </span>
    );
  };

  const getFriendlyUnit = (unit) => {
    const unitsMap = {
      µg: "µg",
      mg: "mg",
      g: "g",
      kcal: "kcal",
    };
    return unitsMap[unit] || unit;
  };

  const getFullUnitName = (unit) => {
    const fullUnitsMap = {
      µg: "Mikrogramm",
      mg: "Milligramm",
      g: "Gramm",
      kcal: "Kalorien",
    };
    return fullUnitsMap[unit] || unit;
  };

  const toggleExplanation = (key) => {
    setShowExplanation((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const translationMap = {
    Energy: "Energie",
    Calories: "Kalorien",
    Fat: "Fett",
    Saturated: "Gesättigt",
    Trans: "Transfette",
    Monounsaturated: "Einfach ungesättigte Fettsäuren",
    Polyunsaturated: "Mehrfach ungesättigte Fettsäuren",
    Carbs: "Kohlenhydrate",
    "Carbohydrates (net)": "Netto-Kohlenhydrate",
    Fiber: "Ballaststoffe",
    Sugars: "Zucker",
    "Sugars, added": "Zugesetzter Zucker",
    Protein: "Eiweiß",
    Cholesterol: "Cholesterin",
    Sodium: "Natrium",
    Calcium: "Calcium",
    Magnesium: "Magnesium",
    Potassium: "Kalium",
    Iron: "Eisen",
    Zinc: "Zink",
    Phosphorus: "Phosphor",
    "Vitamin A": "Vitamin A",
    "Vitamin C": "Vitamin C",
    "Thiamin (B1)": "Thiamin (B1)",
    "Riboflavin (B2)": "Riboflavin (B2)",
    "Niacin (B3)": "Niacin (B3)",
    "Vitamin B6": "Vitamin B6",
    "Vitamin B12": "Vitamin B12",
    "Vitamin D": "Vitamin D",
    "Vitamin E": "Vitamin E",
    "Vitamin K": "Vitamin K",
  };

  const translateLabel = (label) => {
    return translationMap[label] || label;
  };

  return (
    <div className="detailWrapper">
      <div className="labelImgWrapper">
        <h1>{state.label || "Recipe"}</h1>
        <img
          src={state.image || "placeholder_image_url"}
          alt={state.label || "Recipe"}
        />
      </div>

      <div className="section ingredients">
        <h4>Zutaten:</h4>
        <ul>
          {state.ingredientLines && state.ingredientLines.length > 0 ? (
            state.ingredientLines.map((ingredient, index) => <li key={index}>{ingredient}</li>)
          ) : (
            <li>Keine Zutaten aufgelistet.</li>
          )}
        </ul>
      </div>

      <div className="section nutritional-info">
        <div className="nutritional-toggle">
          <button onClick={() => setShowExplanation((prev) => !prev)}>
            {showExplanation ? "Nährwertinformationen verbergen" : "Nährwertinformationen anzeigen"}
          </button>
          {showExplanation && (
            <ul>
              {Object.entries(state.totalNutrients)
                .map(([key, nutrient]) => {
                  const details = getNutrientDetails(nutrient, key);
                  if (!details) return null;
                  return (
                    <li key={key}>
                      {translateLabel(nutrient.label)}: {details}
                    </li>
                  );
                })
                .filter((item) => item !== null)}
            </ul>
          )}
        </div>
      </div>

      <div className="section">
        <h4>Kalorien:</h4>
        <p>{getNutrientDetails(state.totalNutrients.ENERC_KCAL)}</p>
      </div>

      <div className="section">
        <h4>Küche:</h4>
        <p>{state.cuisineType?.join(", ") || "Keine Angaben"}</p>
      </div>

      <div className="section">
        <h4>Art der Mahlzeit:</h4>
        <p>{state.mealType?.join(", ") || "Keine Angaben"}</p>
      </div>

      <div className="section source">
        <h4>Quelle:</h4>
        <a
          href={state.url}
          target="_blank"
          rel="noopener noreferrer">
          {state.source || "Rezept anzeigen"}
        </a>
      </div>
    </div>
  );
};

export default Detail;
