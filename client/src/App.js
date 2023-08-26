import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './userFront/component/shop/cartContext'; // Make sure this is the correct path

import Home from './userFront/component/Pages/Home';
import About from './userFront/component/Pages/About';
import Shop from './userFront/component/Pages/shop';
import AdminDashboard from './components/adminDashboard';
import ProductProvider from './userFront/component/shop/ProductProvider'; 
import client from './config/apolloClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/adminDashboard/*" element={<AdminDashboard />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </Router>
    </ApolloProvider>
  );
}


export default App;
