import React from 'react'
import { storiesOf } from '@storybook/react';
import FormButton from './FormButton'




const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#323232',
    color: 'white',
    paddingTop: '5px',
    paddingBottom: '10px 20px',
    fontSize: '10px',
    marginBottom: '10px',
    margin: '0 20px',
    width: '50px',
    borderRadius: '20px',
    fontWeight: 'bold',
    
}

storiesOf('FormButton', module)
  .add('FormButton', () => <FormButton label="Submit" style={style}/>)