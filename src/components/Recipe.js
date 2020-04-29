// individual recipes live here

import React from 'react'
import { useParams } from 'react-router-dom'


export default function Recipe(props) {
    // console.log(props)

    let recipe = props.recipe ? props.recipe:{
        label:"test", 
        image:"test",
        ingredientLines:"test",
        url:"test"

    }
    let urlLabel = useParams()[`label`]
    if(props.recipes.length > 0 && urlLabel) 
    { 
    console.log(props.recipes[0].recipe.label)
    props.recipes.forEach((recp, i) => {
        if(urlLabel === recp.recipe.label) {
            recipe = props.recipes[i].recipe
        }
    })
    }
    
    return (   
        <div>
            <h1>{recipe.label}</h1>
            <img src={recipe.image}></img>
            <h2>{recipe.ingredientLines}</h2>
            <a className="link" href={recipe.url} >Read More</a>
        </div>
    )
}
