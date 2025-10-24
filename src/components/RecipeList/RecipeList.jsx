import React from 'react'

const RecipeList = ({recipes}) => {
  return (
    <div>
        <h2>All Recipes</h2>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                <h3>{recipe.title}</h3>
                <p><strong>Description:</strong> {recipe.description}</p>
                <p><strong>Servings:</strong> {recipe.servings}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty_level}</p>
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Cuisine:</strong> {recipe.cuisine_type}</p>
                {recipe.recipe_image && (
                  <img
                    src={recipe.recipe_image}
                    alt={recipe.title}
                    style={{ width: "150px", borderRadius: "8px" }}
                  />
                )}

                <h4>Ingredients:</h4>
                <ul>
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i}>
                      {ing.ingredient_quantity} {ing.ingredient_unit}{" "}
                      {ing.ingredient_name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
    </div>
  );
};

export default RecipeList
