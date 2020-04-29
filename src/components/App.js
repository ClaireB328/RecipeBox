import React, { useState, useEffect } from 'react';
import { Route, Redirect, Link } from "react-router-dom"
import './App.css';
import axios from "axios";
import SearchResults from './SearchResults'
import Recipe from './Recipe'



function App() {
  const [input, updateInput] = useState("")
  const [recipes, setRecipes] = useState([])
  const  apiKey = process.env.REACT_APP_RECIPE_BOX
  


      const apiCall = async (e) => {
        if (e) e.preventDefault();
        const data = await axios (`https://corsanywhere.herokuapp.com/https://api.edamam.com/search?q=${input}&app_key=${apiKey}&app_id=ec9b097c`) 

    //updateRecipe()
    setRecipes(data.data.hits)
  }
  
  const handleInputChange = (e) => {
    updateInput (e.target.value)  
  }

  return (
    <>
  <nav className="header">
<Link exact to="/">
    <h1>RECIPE BOX</h1>
  </Link>
  </nav>

  <form onSubmit={apiCall}>
    <input 
      type="text" 
      placeholder="search ingredient" 
      onChange={handleInputChange}>
    </input>
    <button>Submit</button>
</form>

  <div>
      <Route path='/'> 
       {recipes.length && <Redirect to="/SearchResults"/>} 
        </Route>

      <Route path="/SearchResults"> 
       <div>
      {recipes.map(recipe =>  
      <SearchResults key={recipe.label} 
      recipe={recipe.recipe}/>
      )}
      </div>
      </Route>
  

      <Route exact path="/recipe">
      <div>
      {recipes.map(recipe =>  
      <Recipe key={recipe.label} 
      recipe={recipe.recipe}/>
        )}
      </div>
      </Route> 

      <Route path="/recipe/:label">
      <Recipe recipes={recipes}
      />
      </Route>

      </div>

   </>
  )


  }
export default App;
