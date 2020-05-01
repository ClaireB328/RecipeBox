import React, { useState } from 'react';
import { Route, Redirect, Link, useLocation } from "react-router-dom"
import './App.css';
import axios from "axios";
import SearchResults from './SearchResults'
import Recipe from './Recipe'
import Form from './Form'
import Footer from './Footer'
import Header from './Header'
import Image from './Image'



function App() {
  let location = useLocation()
  console.log(location)
  let pathname = location.pathname
  const [input, updateInput] = useState("")
  const [recipes, setRecipes] = useState([])

  const  apiKey = process.env.REACT_APP_RECIPE_BOX
  
  const apiCall = async (e) => {
      if (e) e.preventDefault();
      setRecipes([]);
      updateInput("")
      const data = await axios (`https://corsanywhere.herokuapp.com/https://api.edamam.com/search?q=${input}&app_key=${apiKey}&app_id=ec9b097c`) 
      setRecipes(data.data.hits)
  }
  
  const handleInputChange = (e) => {
      updateInput (e.target.value)  
  }

  const clearState = (e) => {
      setRecipes([])
  }

  


  return (
    <>
      <Header clearState={clearState}/> 

  {
    pathname === "/recipe" || pathname === "/SearchResults" || pathname === "/" && 

    <Form input={input} handleInputChange = {handleInputChange} apiCall={apiCall} 
    />

  }

      <Route exact path='/'> 
          <Image title={Image} />
      </Route>

      {/* <div> */}
        <Route exact path='/'> 
          {recipes.length && <Redirect to="/SearchResults"/>} 
        </Route>

        <Route exact path="/SearchResults"> 
          {recipes.map(recipe =>  
        <SearchResults key={recipe.label} 
           recipe={recipe.recipe}/>
          )}
        </Route>
  

      <Route exact path="/recipe">
      {/* <div> */}
      {recipes.map(recipe =>  
      <Recipe key={recipe.label} 
      recipe={recipe.recipe}/>
        )}
      {/* </div> */}
      </Route> 


      <Route exact path="/recipe/:label">
      <Recipe recipes={recipes}
      />
      </Route>

    {/* </div> */}

        <Footer
        title= "&copy;Claire Buettner"
        />
    </>
  )

  }
export default App;
