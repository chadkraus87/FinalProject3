import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';


// //const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/login" element={<LoginScreen />} />
//   )
// );


const root = document.getElementById('root');
// const appRoot = ReactDOM.createRoot(root);

ReactDOM.render(
  <Provider store ={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  root
);
