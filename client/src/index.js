import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  root
);
