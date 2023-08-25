import React from 'react';
import SizeButtons from './Sizes';
import ColorButtons from './Colors';
import Display from './ProductDisplay';
import { useCart } from './cartContext';
import ProductButtons from './ProductButtons';
import CheckoutBtn from './CheckoutBtn';
import Name from './Name';
import BannerIcons from './BannerIcons';

function ProductPage() {
    const { addToCart } = useCart();
    
    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedColor, setSelectedColor] = React.useState(null);
    const [productName, setProductName] = React.useState('');
    const [productDescription, setProductDescription] = React.useState('');

    React.useEffect(() => {
        fetch("/api/productDetails") //get details from chad
            .then(response => response.json())
            .then(data => {
                setProductName(data.name);
                setProductDescription(data.description);
            })
            .catch(error => console.error("Error fetching product details:", error));
    }, []);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert('Please select a size and color.');
            return;
        }

        const item = {
            id: `${selectedSize}-${selectedColor}`,
            name: productName,
            size: selectedSize,
            color: selectedColor,
            quantity: 1
        };

        addToCart(item);
    }

    return (
        <div>
            <BannerIcons />
            <Name />
            <div className="btns">
                <ProductButtons />
                <div className="productContainer">
                    <Display />
                    <div style={{ flex: 1, padding: '2%' }}>
                        <h1 className="productTitle">{productName}</h1>
                        <div className='productDecription'>{productDescription}</div>
                        <div id='rightSideStuff'>
                            <div id='sizesContainer'>
                                <SizeButtons setSelectedSize={setSelectedSize} />
                            </div>
                            <div id='colorContainer'>
                                <ColorButtons setSelectedColor={setSelectedColor} />
                            </div>
                            <div style={{ paddingTop: '2%' }}>
                                <CheckoutBtn handleAddToCart={handleAddToCart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
