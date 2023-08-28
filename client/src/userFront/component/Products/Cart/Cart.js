import { useCart } from './cartContext';

function Cart() {
    const { cart } = useCart();

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <span>{item.name} - {item.size} - {item.color} - Quantity: {item.quantity}</span>
                </div>
            ))}
        </div>
    );
}

export default Cart;
