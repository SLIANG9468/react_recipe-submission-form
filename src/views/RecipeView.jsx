import RecipeSubmissionForm from "../components/RecipeSubmissionForm";
import { useState } from "react";

import React from 'react'

const RecipeView = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        servings: '',
        difficulty_level:'',
        category:'',
        cuisine_type:''
    })

    
    const handleChange = (event) =>{
        const { name, value } = event.target //grabbing the name and value properties from the input element
        setFormData(prevData => ({...prevData, [name]:value})) // creating new object, spreading old object, update the key that we are changing        
    }
  return (
    <>
        <RecipeSubmissionForm handleChange={handleChange} formData={formData}/>
    </>
  )
}

export default RecipeView
