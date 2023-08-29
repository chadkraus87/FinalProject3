import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './userFront/component/Products/Cart/cartContext'; // Make sure this is the correct path

import Home from './userFront/component/Pages/Home';
import About from './userFront/component/Pages/About';
import Shop from './userFront/component/Pages/Shop';
import AdminDashboard from './components/adminDashboard';
import client from './config/apolloClient';
import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import ProductContext from './userFront/component/Products/ProductDisplay/ProductContext';
import LoginScreen from './userFront/component/Pages/LoginScreen';
import RegisterScreen from './userFront/component/Pages/RegisterScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <ApolloProvider client={client}>
      <Router>
        <CartProvider>
        <ToastContainer />

        <ProductContext.Provider value={{ selectedProductId, setSelectedProductId }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/adminDashboard/*" element={<AdminDashboard />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Routes>
            
            </ProductContext.Provider>
            
        </CartProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;