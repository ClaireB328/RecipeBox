import React from 'react'

export default function Form(props) {
    return (
        <div>
        <form onSubmit={props.apiCall}>
          <input 
            type="text" 
            placeholder="search ingredient" 
            onChange={props.handleInputChange}
            value={props.input}
            >
          </input>
        <button>Submit</button>
      </form>
        </div>
    )
}
