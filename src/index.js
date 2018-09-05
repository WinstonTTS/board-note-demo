import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
