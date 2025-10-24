import RecipeSubmissionForm from "../components/RecipeSubmissionForm/RecipeSubmissionForm";
import { useState } from "react";
import RecipeList from "../components/RecipeList/RecipeList";
import React from 'react'

const RecipeView = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        servings: 2,
        difficulty_level:'easy',
        category:'appetizer',
        cuisine_type:'american',
        recipe_image:'',
        ingredient_name:'',
        ingredient_quantity:1,
        ingredient_unit:'cups',
        ingredients:[]/* array of ingredients */
    })

  const [recipes, setRecipes] = useState([])

  return (
    <div className='main'>
        <RecipeSubmissionForm className='recipeForm' setFormData={setFormData} formData={formData} setRecipes={setRecipes}/>

    </div>
  )
}

export default RecipeView
