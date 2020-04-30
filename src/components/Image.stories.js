import React from 'react'
import { storiesOf } from '@storybook/react';
import Image from './Image'



const style = {
    backgroundColor: 'black',
    color: 'white', 
    height: '50px',
    fontSize: '20px'
    
}

storiesOf('Image', module)
  .add('Image', () => <Image label="Image" style={style}/>)