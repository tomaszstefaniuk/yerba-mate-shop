import React from 'react';
import './styles/global.scss';
import './styles/normalize.scss';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

//App components
import App from './components/App/App.js';


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
);
