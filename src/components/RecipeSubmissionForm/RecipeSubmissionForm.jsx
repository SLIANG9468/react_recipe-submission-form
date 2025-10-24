import { useState } from "react";
import "./RecipeSubmissionForm.css"
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


const RecipeSubmissionForm = ({setFormData, formData, setRecipes}) => {
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    servings: '',
    recipe_image:'',
    ingredient_name:'',
    ingredient_quantity:'',
  })

  const [ingredients, setIngredients] = useState([])

  const validateField = (name,value) =>{
    switch(name){
      case 'title':
        return (value.length > 2 && value.length <= 50) ? '':'Title must be between 3 and 50 characters'
      case 'description':
        return (value.length >= 10 && value.length <= 500) ? '':'Description must be between 10 and 500 characters'
    }
  }

  const handleChange = (event) =>{
    const { name, value } = event.target
    setFormData(prevData => ({...prevData, [name]:value}))    //create a copy of previous state and update the field being changed

    const error = validateField(name, value)
    setErrors(prevData => ({...prevData, [name]:error}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setRecipes(prevData => [...prevData, formData])
    setFormData({
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
        ingredients:[]
    })
  }

  const handleAdd= (event)=>{
    event.preventDefault();
    const newIngredient = {
      ingredient_name: formData.ingredient_name,
      ingredient_quantity: formData.ingredient_quantity,
      ingredient_unit: formData.ingredient_unit
    }
    
    const updatedIngredients = [...formData.ingredients, newIngredient];
    setIngredients(updatedIngredients);
    setFormData(prevData => ({
      ...prevData,
      ingredients:updatedIngredients,
      ingredient_name:'',
      ingredient_quantity:1,
      ingredient_unit:'cups'
    }))
  }

  return (
    <>
        <form onSubmit={(event)=>handleSubmit(event)}>
          <div className="core_field">
            <label>Title: </label>
            <TextField label="Title" variant="outlined"
              type="text" 
              value={formData.title} 
              name="title" 
              onChange={(event)=>handleChange(event)} 
              required/>
              {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
          </div>
          <div className="core_field">
            <label>Description:</label>
            <TextField variant="outlined"  type="text" 
              label="description" 
              value={formData.description} 
              name="description"
              minLength={10}
              maxLength={500} 
              onChange={(event)=>handleChange(event)}
              required/>
          </div>
          <div className="core_field">
            <label>Serving:</label>
            <TextField variant="outlined"  type="number" 
              label="servings" 
              value={formData.servings} 
              name="servings"
              min={1}
              max={20} 
              onChange={(event)=>handleChange(event)}
              required/>
          </div>
          <div className="core_field">
            <label>Difficulty_Level:</label>
            <Select name='difficulty_level' 
              required
              value={formData.difficulty_level}
              onChange={(event)=>handleChange(event)}>
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </div>
          <div className="core_field">
            <label>Category:</label>
            <Select name='category' required
              value={formData.category}
              onChange={(event)=>handleChange(event)}>
              <MenuItem value="appetizer">Appetizer</MenuItem>
              <MenuItem value="main-course">Main Course</MenuItem>
              <MenuItem value="desert">Dessert</MenuItem>
              <MenuItem value="side-dish">Side Dish</MenuItem>
              <MenuItem value="beverage">Beverage</MenuItem>
            </Select>
          </div>
          <div className="core_field">
            <label>Cuisine:</label>
            <Select name='cuisine_type' required
              value={formData.cuisine_type}
              onChange={(event)=>handleChange(event)}>
              <MenuItem value="american">American</MenuItem>
              <MenuItem value="italian">Italian</MenuItem>
              <MenuItem value="mexican">Mexican</MenuItem>
              <MenuItem value="asian">Asian</MenuItem>
              <MenuItem value="mediterranean">Mediterranean</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </div>
          <div className="core_field">
            <label>Image:</label>
            <TextField variant="outlined"  type="url" 
              label="recipe_image" 
              value={formData.recipe_image} 
              name="recipe_image" 
              onChange={(event)=>handleChange(event)}
              />
          </div>
          <div> INGREDIENTS </div>
          <label>Name:</label>
          <TextField variant="outlined"  type="text"
            label= "ingredient name"
            value={formData.ingredient_name}
            name="ingredient_name"
            onChange={(event)=>handleChange(event)}
          />
          <label>Quantity:</label>
          <TextField variant="outlined"  type="number"
            label= "ingredient quantity"
            value={formData.ingredient_quantity}
            name="ingredient_quantity"
            onChange={(event)=>handleChange(event)}
          />
          <label>Unit:</label>
          <Select name='ingredient_unit' required
            value={formData.ingredient_unit}
            onChange={(event)=>handleChange(event)}>
            <MenuItem value="cups">Cups</MenuItem>
            <MenuItem value="tablespoons">Table Spoons</MenuItem>
            <MenuItem value="teaspoons">Teaspoons</MenuItem>
            <MenuItem value="ounces">Ounces</MenuItem>
            <MenuItem value="pounds">Pounds</MenuItem>
          </Select>
          <Button variant="contained" type='button' onClick={(event)=>handleAdd(event)}>Add Ingredient</Button>
          
          <Button variant="contained" type="submit">Submit Recipe</Button>

          <div>
            <h4>Ingredients List:</h4>
            <ul>
              {formData.ingredients.map((ing, index) => (
                <li key={index}>
                  {ing.ingredient_quantity} {ing.ingredient_unit} {ing.ingredient_name}
                </li>
              ))}
            </ul>
          </div>
        </form>
    </>
  )
}

export default RecipeSubmissionForm