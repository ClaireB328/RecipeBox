import React from 'react'
import { Link } from "react-router-dom"


export default function Header(props) {
    return (
        <nav className="header">
        <Link exact to="/" onClick={props.clearState}>
          <h1>RECIPE BOX</h1>
        </Link>
      </nav>
    )
}
