import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import defaultNoPicture from "../../assets/img/defaultNoPicture.png";

const Card = ({ recipes }) => {
  const navigate = useNavigate();
  console.log(recipes);
  return (
    <div className="card">
      {recipes.map(({ recipe }, index) => {
        const { label, image } = recipe;
        return (
          <div
            className="cardWrapper"
            key={index}>
            <h2>{label}</h2>
            <img
              src={image || defaultNoPicture}
              alt="foodRecipeImage"
            />
            <button onClick={() => navigate("detail", { state: recipe })}>Details</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
