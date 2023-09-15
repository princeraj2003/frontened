// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { store } from './store/store';
// import { Provider } from 'react-redux';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store} >
//     <App />
//     </Provider>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
