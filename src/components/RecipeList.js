import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <>
      <div className="recipe-list">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__ad-recipe-btn-container">
        <button className="btn btn--primary">Add Recipe</button>
      </div>
    </>
  );
}
