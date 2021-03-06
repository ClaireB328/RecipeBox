import React from 'react'
import { storiesOf } from '@storybook/react';
import Footer from './Footer'


const style = {
    backgroundColor: '#405876',
    height: '15px',
    paddingTop: '15px',
    paddingBottom: '15px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center'  
}

storiesOf('Footer', module)
  .add('Footer', () => <Footer title="&copy;Claire Buettner" style={style}/>)

