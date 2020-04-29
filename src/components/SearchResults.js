//what lives here: 
// search results - various recipes related to search will appear here.

import React from 'react'
import { Link } from "react-router-dom"



function SearchResults(props) {
console.log(props)
    return (
        <Link to={`/recipe/${props.recipe.label}`}>
        <div>
        <h1>{props.recipe.label}</h1>
        <img src={props.recipe.image}></img>  
        </div>
        </Link>
    )
}



export default SearchResults

