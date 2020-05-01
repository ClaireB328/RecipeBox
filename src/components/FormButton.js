import React from 'react';

// This is a functional component - just sent up a little differently as an arrow function!
const FormButton = (props) => (
    <button style={props.style}>
        {props.label}
    </button>
)

export default FormButton;