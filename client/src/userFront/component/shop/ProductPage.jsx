import React, { useContext } from 'react';
import { ProductContext } from './ProductProvider';
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

function ProductPage() {
    const { addToCart } = useCart();
    const { selectedProductId, setSelectedProductId } = useContext(ProductContext);
    console.log(selectedProductId)

    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedColor, setSelectedColor] = React.useState(null);
    const [productName, setProductName] = React.useState('');
    const [productDescription, setProductDescription] = React.useState('');




    const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
        variables: { id: selectedProductId }
    });

    React.useEffect(() => {
        if (data) {
            setProductName(data.getProduct.name);
            setProductDescription(data.getProduct.description);
            setSelectedProductId(data.getProduct._id);
        }
    }, [data]);
    

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