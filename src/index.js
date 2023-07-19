import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

 


import reportWebVitals from './reportWebVitals';

// default imports are alias by name, only one default import allowed in JS
// import X from './app/App';
import App from './app/App';

// to be used later
import store from './app/store';
import './app/test-store'; // learning redux only

// Provider expose store as react context, the connect container component take store from provider context
import {Provider} from 'react-redux';


//  <React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
// PATCH V.DOM to REAL DOM
// REACT model =  UNI DIRECTIONAL DATA FLOW
// DAta flow only one direction, ie V.DOM to REAL DOM
root.render(
     <Provider store={store}>
          <App />
     </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
