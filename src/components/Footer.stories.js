import React from 'react'
import { storiesOf } from '@storybook/react';
import Footer from './Footer'



const style = {
    backgroundColor: 'black',
    color: 'white', 
    height: '50px',
    fontSize: '20px'
    
}

storiesOf('Footer', module)
  .add('Footer', () => <Footer label="Footer" style={style}/>)

