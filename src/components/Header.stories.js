import React from 'react'
import { storiesOf } from '@storybook/react';
import Header from './Header'



const style = {
    backgroundColor: 'green',
    color: 'white', 
    height: '60px',
    fontSize: '20px'
    
}

storiesOf('Header', module)
  .add('Header', () => <Header label="Header" style={style}/>)

