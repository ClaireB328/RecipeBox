
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const style = {
    backgroundColor: 'black',
    borderRadius: '20px',
    color: 'white',
    display: 'flex',
    fontSize: '10px',
    fontWeight: 'bold',
    margin: '0 20px',
    marginBottom: '10px',
    padding: '10px 20px'
}

storiesOf('Button', module)
    .add('Primary', () => <Button label="Recipe Link" style={style} />)