import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CartProvider } from './userFront/component/shop/cartContext'; // Make sure this is the correct path

// import Home from './userFront/component/Pages/Home';
// import About from './userFront/component/Pages/About';
// import Shop from './userFront/component/Pages/Shop';

import AdminDashboard from '../src/components/adminDashboard'

function App() {
  return (
    <div>
      {/* <Example /> */}
      <AdminDashboard />
    </div>
  );
}

export default App;
