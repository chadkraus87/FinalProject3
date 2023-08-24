import './App.css';
import ProductPage from './userFront/component/shop/ProductPage';
import Cart from './userFront/component/shop/Cart'; // Assuming this is the correct path to your Cart component
import { CartProvider } from './userFront/component/shop/cartContext'; // Assuming this is the correct path to your cartContext file

function App() {
  return (
    <CartProvider>
      <div>
        <ProductPage />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;


// import './App.css';
// import Home from './userFront/component/Pages/Home'; // Assuming this is the correct path to your cartContext file

// function App() {
//   return (
//     <Home />
//   );
// }

// export default App;
