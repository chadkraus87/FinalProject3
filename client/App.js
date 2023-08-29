import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './userFront/component/Products/ProductDisplay/cartContext'; // Make sure this is the correct path

import Home from './userFront/component/Pages/Home';
import About from './userFront/component/Pages/About';
import Shop from './src/userFront/component/Pages/Shop';
import AdminDashboard from './components/adminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Shop" 
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