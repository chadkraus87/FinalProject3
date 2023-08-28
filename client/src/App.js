import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './userFront/component/shop/cartContext'; // Make sure this is the correct path

import Home from './userFront/component/Pages/Home';
import About from './userFront/component/Pages/About';
import Shop from './userFront/component/Pages/shop';
import AdminDashboard from './components/adminDashboard';
import LoginScreen from './userFront/component/Pages/LoginScreen';
import RegisterScreen from './userFront/component/Pages/RegisterScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" 
               element={
                  <CartProvider>
                    <Home />
                  </CartProvider>
               } 
        />
        <Route path="/about" 
               element={
                  <CartProvider>
                    <About />
                  </CartProvider>
               } 
        />
        <Route path="/shop" 
               element={
                  <CartProvider>
                    <Shop />
                  </CartProvider>
               } 
        />
        <Route path="/adminDashboard/*" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
