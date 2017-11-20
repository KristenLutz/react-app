import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { PythagorasTree } from './PythagorasTree.js';

ReactDOM.render(
  React.createElement(PythagorasTree, {
    sprout: 0.01,
    sway: 0.04,
  }),
  document.getElementById('app')
)

