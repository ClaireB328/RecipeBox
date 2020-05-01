import React from 'react'
import { storiesOf } from '@storybook/react';
import Form from './Form'





const style = {
    alignItems: 'center',
    backgroundColor: '#405876',
    color: 'white',
    display: 'flex',
    fontSize: '60px',
    fontWeight: 'bold',
    /* margin: 10% auto; */
    padding: '0px 60px',
    boxShadow: '2px 3px grey',
   
    color: 'white', 
    height: '50px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
    
}

storiesOf('Form', module)
  .add('Form', () => <Form input="Search Ingredient" style={style}/>)