import React, { useContext, useState, useEffect } from 'react';
import ProductContext from './ProductContext';
import SizeButtons from './Sizes';
import ColorButtons from './Colors';
// import Display from './ThreeDDisplay';
import { useCart } from '../Cart/cartContext';
import ProductButtons from './ProductButtons';
import CheckoutBtn from './CheckoutBtn';
import Name from '../Layout/Name';
import BannerIcons from '../Layout/BannerIcons';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_DETAILS, GET_ALL_PRODUCT_IDS } from '../../../../utils/queries';
import Reviews from './Review';

function ProductPage() {
    
    const { addToCart } = useCart();
    const { selectedProductId, setSelectedProductId } = useContext(ProductContext);

    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedColor, setSelectedColor] = React.useState(null);
    const [productName, setProductName] = React.useState('');
    const [productDescription, setProductDescription] = React.useState('');

    console.log("Selected Product ID in ProductPage:", selectedProductId);



    const { data: productData, loading: productLoading, error: productError } = useQuery(GET_PRODUCT_DETAILS, {
        skip: !selectedProductId,
        variables: { id: selectedProductId }
    });

    const { data: allProductsData, loading: allProductsLoading, error: allProductsError } = useQuery(GET_ALL_PRODUCT_IDS);

    React.useEffect(() => {
        if (productData && productData.productById) {            
            setProductName(productData.productById.name);
            setProductDescription(productData.productById.description);
        }
    }, [productData]);
    
    
    React.useEffect(() => {
        console.log("Product Name:", productName);
        console.log("Product Description:", productDescription);
    }, [productName, productDescription]);
    

    const handleAddToCart = () => {
        // ... [same as before]
    }

    const handleProductSelect = (e) => {
        setSelectedProductId(e.target.value);
    }

    const productStyle = {
        display: 'flex',
        width: '90%',
        padding: '2% 1% 1% 10%',
        justifyContent: 'space-between',
    };
    const shadow = {
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        border: '1px solid transparent',
    };


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
                {/* <div style={productStyle}>
                    <div style={shadow}>
                        <Display modelPath={productData?.getProduct?.model} />
                    </div> */}
                <div style={productStyle}>
    {/* <div style={shadow}>
        {productData?.productById?.model && <Display modelPath={productData.productById.model} />}
    </div> */}

    <div style={{ flex: 1, padding: '2%' }}>
        <h1 className="productTitle">{productName}</h1>
        <div className='productDecription'>{productDescription}</div>
        <div id='rightSideStuff'>
            <div id='sizesContainer'>
                <SizeButtons sizes={productData?.productById?.sizes} setSelectedSize={setSelectedSize} />
            </div>
            <div id='colorContainer'>
                <ColorButtons colors={productData?.productById?.colors} setSelectedColor={setSelectedColor} />
            </div>
            <div style={{ paddingTop: '2%' }}>
                <CheckoutBtn handleAddToCart={handleAddToCart} />
            </div>
            <Reviews
                productName={productData?.productById?.name}
                reviews={productData?.productById?.reviews ?? []}
            />
        </div>
    </div>
</div>

            </div>
        </div>
    );
}

export default ProductPage;
