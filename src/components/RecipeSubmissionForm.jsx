import { useState } from "react";
import "./RecipeSubmissionForm.css"

const RecipeSubmissionForm = ({handleChange, formData}) => {

  return (
    <>
        <form>
            <input type="text" placeholder="title" value={formData.title} name="title" onChange={(event)=>handleChange(event)}/>
            <input type="text" placeholder="description" value={formData.description} name="description" onChange={(event)=>handleChange(event)}/>
            <input type="text" placeholder="servings" value={formData.servings} name="servings" onChange={(event)=>handleChange(event)}/>
            <input type="text" placeholder="difficulty_level" value={formData.difficulty_level} name="difficulty_level" onChange={(event)=>handleChange(event)}/>
            <input type="text" placeholder="category" value={formData.category} name="category" onChange={(event)=>handleChange(event)}/>
            <input type="text" placeholder="cuisine_type" value={formData.cuisine_type} name="cuisine_type" onChange={(event)=>handleChange(event)}/>
        </form>
        <div>
            <h3>Title: {formData.title}</h3>
            <h3>Description: {formData.description}</h3>
            <h3>Serving:{formData.servings}</h3>
            <h3>Difficulty_Level: {formData.difficulty_level}</h3>
            <h3>Category:{formData.category}</h3>
            <h3>Cuision_Type:{formData.cuisine_type}</h3>
        </div>
    </>
  )
}

export default RecipeSubmissionForm