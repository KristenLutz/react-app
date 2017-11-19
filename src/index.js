import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const square = React.createElement('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    margin: '10px',
  }
})
const blueSquare = React.createElement('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    margin: '10px',
  }
})


const container = React.createElement(
  // The first argument specifies the element's type
  'div',

  // The second argument specifies the element's attributes, or "props"
  { style: { border: '5px solid blue' } },

  // The remaining arguments list the element's children
  square,
  square,
  blueSquare
)

ReactDOM.render(container, document.getElementById('root'))
