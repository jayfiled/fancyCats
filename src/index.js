import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CardList from './CardList';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
