import React, { useState, useEffect } from 'react';
import { Route, Redirect, Link } from "react-router-dom"
import './App.css';
import axios from "axios";
import SearchResults from './SearchResults'
import Recipe from './Recipe'



function App() {
  const  apiKey = process.env.REACT_APP_RECIPE_BOX
  const [input, updateInput] = useState("")
  const [recipes, setRecipes] = useState([])



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
  <div>

      <Route path='/'> 
       {recipes.length && <Redirect to="/SearchResults"/>} 
        </Route>

        <Route path="/SearchResults">
        <SearchResults recipe={Recipe} />
        </Route>
  </div>

<form onSubmit={apiCall}>
    <input 
      type="text" 
      placeholder="search ingredient" 
      onChange={handleInputChange}>
    </input>
    <button>Submit</button>
</form>

  <div>
    {recipes.map(recipe =>  
    <SearchResults
    key={recipe.label}
    recipe={recipe}
    />
    )}
    </div>

 
   </>
  )


  }
export default App;
