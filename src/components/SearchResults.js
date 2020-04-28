//what lives here: 
// search results - various recipes related to search will appear here.

import React from 'react'



function SearchResults(props) {
    return (
        <div>
        <h1>{props.recipe.recipe.label}</h1>
        <img src={props.recipe.recipe.image}></img>
           
        </div>
    )
}



export default SearchResults

