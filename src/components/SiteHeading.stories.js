import React from 'react'
import { storiesOf } from '@storybook/react';
import SiteHeading from './SiteHeading'


const style = {
    backgroundColor: '#405876',
    height: '15px',
    paddingTop: '20px',
    paddingBottom: '25px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center'
       
}

storiesOf('SiteHeading', module)
  .add('SiteHeading', () => <SiteHeading label="SiteHeading" style={style}/>)