import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './store';
import { onLodingSignIn } from './actions/auth_actions';


const root = ReactDOM.createRoot(document.getElementById('root'));


store.dispatch(onLodingSignIn());

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
 
);


