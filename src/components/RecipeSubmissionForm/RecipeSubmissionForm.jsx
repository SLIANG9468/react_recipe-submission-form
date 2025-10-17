import { useState } from "react";
import "./RecipeSubmissionForm.css"

const RecipeSubmissionForm = ({setFormData, formData, setRecipes}) => {
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    servings: '',
    recipe_image:'',
    ingredient_name:'',
    ingredient_quantity:'',
  })

  const validateField = (name,value) =>{
    switch(name){
      case 'title':
        return (value.length >= 2 && value.length <= 50) ? '':'Title must be between 3 and 50 characters'
      case 'description':
        return (value.length >= 10 && value.length <= 500) ? '':'Description must be between 10 and 500 characters'
    }
    
  }

  const handleChange = (event) =>{
    const { name, value } = event.target
    setFormData(prevData => ({...prevData, [name]:value}))

    const error = validateField(name, value)
    setErrors(prevData => ({...prevData}))

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setRecipes(prevData => [...prevData, formData])
    setFormData({
        title: '',
        description: '',
        servings: 0,
        difficulty_level:'Easy',
        category:'Appeitizer',
        cuisine_type:'American',
        recipe_image:'',
        ingredient_name:'',
        ingredient_quantity:0,
        ingredient_unit:'cups',
        ingredients:[]
    })
  }

    const addIngredientList= (event)=>{

    }

  return (
    <>
        <form onSubmit={(event)=>handleSubmit(event)}>
          <div className="core_field">
            <label>Titile: </label>
            <input type="text" 
              placeholder="title" 
              value={formData.title} 
              name="title" 
              minLength={3}
              maxLength={50}
              onChange={(event)=>handleChange(event)} 
              required/>
          </div>
          <div className="core_field">
            <label>Description:</label>
            <input type="text" 
              placeholder="description" 
              value={formData.description} 
              name="description"
              minLength={10}
              maxLength={500} 
              onChange={(event)=>handleChange(event)}
              required/>
          </div>
          <div className="core_field">
            <label>Serving:</label>
            <input type="number" 
              placeholder="servings" 
              value={formData.servings} 
              name="servings"
              min={1}
              max={20} 
              onChange={(event)=>handleChange(event)}
              required/>
          </div>
          <div className="core_field">
            <label>Difficulty_Level:</label>
            <select name='difficulty_level' required>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="core_field">
            <label>Category:</label>
            <select name='category' required>
              <option>Appetizer</option>
              <option>Main Course</option>
              <option>Dessert</option>
              <option>Side Dish</option>
              <option>Beverage</option>
            </select>
          </div>
          <div className="core_field">
            <label>Cuisine:</label>
            <select name='cuision' required>
              <option value="american">American</option>
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
              <option value="asian">Asian</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="core_field">
            <label>Image:</label>
            <input type="url" 
              placeholder="recipe_image" 
              value={formData.image} 
              name="recipe_image" 
              onChange={(event)=>handleChange(event)}
              />
          </div>
            <div> INGREDIENTS </div>
            <label>Name:</label>
            <input type="text"
              placeholder= "ingredient name"
              value={formData.ingredient_name}
              name="ingredient_name"
              onChange={(event)=>handleChange(event)}
            />
            <label>Quantity:</label>
            <input type="number"
              placeholder= "ingredient quantity"
              value={formData.ingredient_quantity}
              name="ingredient_quantity"
              onChange={(event)=>handleChange(event)}
            />
            <label>Unit:</label>
            <select name='unit' required>
              <option>cups</option>
              <option>tablespoons</option>
              <option>teaspoons</option>
              <option>ounces</option>
              <option>pounds</option>
              <option>grams</option>
              <option>pieces</option>
            </select>
            <button type='click' onClick={(event)=>addIngredientList(event)}>Add</button>
            <div>
              <button type="submit">Submit Recipe</button>
            </div>
        </form>

    </>
  )
}

export default RecipeSubmissionForm