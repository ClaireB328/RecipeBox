import React from 'react'
import { storiesOf } from '@storybook/react';
import Form from './Form'



const style = {
    backgroundColor: 'black',
    color: 'white', 
    height: '50px',
    fontSize: '20px'
    
}

storiesOf('Form', module)
  .add('Form', () => <Form label="Form" style={style}/>)