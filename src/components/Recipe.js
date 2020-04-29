// individual recipes live here

import React from 'react'



export default function Recipe(props) {
    // console.log(props)
    return (
        <div>
            <h1>{props.recipe.label}</h1>
            <img src={props.recipe.image}></img>
            <h2>{props.recipe.ingredientLines}</h2>
            <a className="link" href={props.recipe.url} >Read More</a>


        </div>
    )
}
