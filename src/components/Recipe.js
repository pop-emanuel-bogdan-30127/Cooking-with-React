import React from "react";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div class="recipe">
      <div class="recipe__header">
        <h3 class="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger">Delete</button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value">{instructions}</div>
      </div>
      <div className="recipe__row">
        <span>Ingredients:</span>
        <div className="recipe__value">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}