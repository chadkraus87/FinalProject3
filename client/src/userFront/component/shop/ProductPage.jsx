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
import { GET_PRODUCT_DETAILS, GET_ALL_PRODUCT_IDS } from '../../../utils/queries';
import Reviews from './Review';

function ProductPage() {
    const { addToCart } = useCart();
    const { selectedProductId, setSelectedProductId } = useContext(ProductContext);

    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedColor, setSelectedColor] = React.useState(null);
    const [productName, setProductName] = React.useState('');
    const [productDescription, setProductDescription] = React.useState('');

    const { data: productData, loading: productLoading, error: productError } = useQuery(GET_PRODUCT_DETAILS, {
        skip: !selectedProductId,
        variables: { id: selectedProductId }
    });

    const { data: allProductsData, loading: allProductsLoading, error: allProductsError } = useQuery(GET_ALL_PRODUCT_IDS);

    React.useEffect(() => {
        if (productData && productData.getProduct) {
            setProductName(productData.getProduct.name);
            setProductDescription(productData.getProduct.description);
        }
    }, [productData]);

    const handleAddToCart = () => {
        // ... [same as before]
    }

    const handleProductSelect = (e) => {
        setSelectedProductId(e.target.value);
    }

    if (productLoading || allProductsLoading) return <p>Loading...</p>;
    if (productError || allProductsError) {
        console.error("Error fetching data:", productError || allProductsError);
        return <p>I am a problem... fix me: {(productError || allProductsError).message}</p>;
    }

    return (
        <div>
            <BannerIcons />
            <Name />
            <div className="btns">
            <ProductButtons setSelectedProductId={setSelectedProductId} />
                <div className="productContainer">
                    <Display />
                    <div style={{ flex: 1, padding: '2%' }}>
                        <h1 className="productTitle">{productName}</h1>
                        <div className='productDecription'>{productDescription}</div>
                        <div id='rightSideStuff'>
                            <div id='sizesContainer'>
                                <SizeButtons sizes={productData?.getProduct?.sizes} setSelectedSize={setSelectedSize} />
                            </div>
                            <div id='colorContainer'>
                                <ColorButtons colors={productData?.getProduct?.colors} setSelectedColor={setSelectedColor} />
                            </div>
                            <div style={{ paddingTop: '2%' }}>
                                <CheckoutBtn handleAddToCart={handleAddToCart} />
                            </div>
                            <Reviews 
    productName={productData?.getProduct?.name} 
    reviews={productData?.getProduct?.reviews ?? []} 
/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
