import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { getBoxStyle } from './Spiral.js'



var boxes2 = [];
for (var i=0; i<=15;i++) {
	if((i+1)%3===0&&(i+1)%5===0){
		boxes2.push(React.createElement('div', { style: getBoxStyle(i), key: i }, 
				React.createElement('strong', {}, 'FizzBuzz'))
		)
	}else if((i+1)%3===0){
		boxes2.push(React.createElement('div', { style: getBoxStyle(i), key: i }, 
				React.createElement('strong', {}, 'Fizz'))
		)
	}else if((i+1)%5===0){
		boxes2.push(React.createElement('div', { style: getBoxStyle(i), key: i }, 
				React.createElement('strong', {}, 'Buzz'))
		)
	}else{
		boxes2.push(React.createElement('div', { style: getBoxStyle(i), key: i }, i+1))

	}
}

ReactDOM.render(
  React.createElement('div', {}, boxes2),
  document.getElementById('app')
)

