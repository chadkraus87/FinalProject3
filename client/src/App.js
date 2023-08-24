import './App.css';
import ProductPage from './userFront/component/ProductPage';
import Cart from './userFront/component/Cart'; // Assuming this is the correct path to your Cart component
import { CartProvider } from './userFront/component/cartContext'; // Assuming this is the correct path to your cartContext file

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
