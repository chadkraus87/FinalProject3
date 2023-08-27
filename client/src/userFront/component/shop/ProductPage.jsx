import React, { useContext, useState, useEffect } from 'react';
import ProductContext from './ProductContext';
import SizeButtons from './Sizes';
import ColorButtons from './Colors';
import Display from './ProductDisplay';
import { useCart } from './cartContext';
import ProductButtons from './ProductButtons';
import CheckoutBtn from './CheckoutBtn';
import Name from './Name';
import BannerIcons from './BannerIcons';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_DETAILS } from '../../../utils/queries';
import jwt from 'jsonwebtoken';


function ProductPage() {
    const { addToCart } = useCart();
    const { selectedProductId, setSelectedProductId } = useContext(ProductContext);
    console.log(selectedProductId);

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
        variables: { id: selectedProductId }
    });

    const dummyLogin = () => {
        const dummyToken = jwt.sign({ data: { email: "test@dummy.com", name: "Dummy User", _id: "123456" } }, 'mysecretssshhhhhhh', { expiresIn: '2h' });
        localStorage.setItem('jwtToken', dummyToken);
     }
     

    useEffect(() => {
        if (data) {
            setProductName(data.getProduct.name);
            setProductDescription(data.getProduct.description);
            setSelectedProductId(data.getProduct._id);
        }
    }, [data, setSelectedProductId]);

    const handleAddToCart = () => {
        // ... [same as before]
    }

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error("Error fetching data:", error);
        return <p>I am a problem... fix me: {error.message}</p>;
    }
    
    return (
        <div>
            <BannerIcons />
            <button onClick={dummyLogin}>Dummy Login</button>
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
                                {/* Passing sizes to SizeButtons */}
                                <SizeButtons sizes={data?.getProduct?.sizes} setSelectedSize={setSelectedSize} />
                            </div>
                            <div id='colorContainer'>
                                <ColorButtons colors={data?.getProduct?.colors} setSelectedColor={setSelectedColor} />
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
