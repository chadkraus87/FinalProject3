import * as React from 'react';
import { useCart } from './cartContext'

function CartCount() {
  const { cart } = useCart(); // Destructure the cart array from the context

  const dummyCount = 5; // This is your dummy count value

  const dot = {
    position: 'Absolute',
    left: '97.75%',
    top: '6.25%'
  }

  return (
    <div>
        <div style={dot} >
      {dummyCount > 0 && (
        <span className="cart-count">
          {dummyCount}
        </span>
        
      )}
      </div>
    </div>
  );
}

export default CartCount;
