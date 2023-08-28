import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginScreen from './components/pages/LoginScreen';

// //const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/login" element={<LoginScreen />} />
//   )
// );


const root = document.getElementById('root');
// const appRoot = ReactDOM.createRoot(root);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
