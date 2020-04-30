// individual recipes live here

import React from 'react'
import { useParams } from 'react-router-dom'


export default function Recipe(props) {
    // console.log(props)

    let recipe = props.recipe ? props.recipe:{
        label:"", 
        image:"",
        ingredientLines:"",
        url:""
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
        <div className="recipe">
            <h1>{recipe.label}</h1>
            <img src={recipe.image}></img>
            <h2>Ingredients</h2>
            <h3>{recipe.ingredientLines}</h3>
            <a className="link" target="_blank"  href={recipe.url}>Read More</a>

        </div>
    )
}
// 2nd return inside if/else statement 
//if recipe exists then return the 1st div else return null/empty div. replace test object with null 