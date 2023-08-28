import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './userFront/component/shop/cartContext'; // Make sure this is the correct path

import Home from './userFront/component/Pages/Home';
import About from './userFront/component/Pages/About';
import Shop from './userFront/component/Pages/shop';
import AdminDashboard from './components/adminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" 
               element={
                  <CartProvider>
                    <Shop />
                  </CartProvider>
               } 
        />
        <Route path="/adminDashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;