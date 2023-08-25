import * as React from 'react';
import SizeButtons from './Sizes'
import ColorButtons from './Colors'
// import IconLabelButtons from './CheckoutBtn'
// import Display from './ProductDisplay'
import { useCart } from './cartContext';
import ProductButtons from './ProductButtons';
import CheckoutBtn from './CheckoutBtn';
import Name from './Name';
import BannerIcons from './BannerIcons';




//Getting the Data from the server

// const [sizes, setSizes] = React.useState([]);

// React.useEffect(() => {
//     fetch("/api/sizes")   // replace with API endpoint
//         .then(response => response.json())
//         .then(data => setSizes(data))
//         .catch(error => console.error("Error fetching sizes:", error));
// }, []);

// const [colors, setColors] = React.useState([]);

// React.useEffect(() => {
//     fetch("/api/colors")   // replace with API endpoint
//         .then(response => response.json())
//         .then(data => setSizes(data))
//         .catch(error => console.error("Error fetching colors:", error));
// }, []);


function ProductPage() {

    
    
    const { addToCart } = useCart();
    
    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedColor, setSelectedColor] = React.useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    }

    const handleColorClick = (color) => {
        setSelectedColor(color);
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert('Please select a size and color.');
            return;
        }

        const item = {
            id: `${selectedSize}-${selectedColor}`,
            name: 'Dog Clogs',
            size: selectedSize,
            color: selectedColor,
            quantity: 1
        };

        addToCart(item);
    }



    const btns = {
        paddingLeft: '4%',
        paddingTop: '3%'
    }

    const productContainer = {
        display: 'flex',
        padding: '1%',
        paddingTop: '2%',
        paddingLeft: '5%',
        justifyContent: 'space-between'
    }

    return (
        <div>
            <BannerIcons />
            {/* Name of Business*/}
            <Name />
            <div style={btns}>
                <ProductButtons />
                <div style={productContainer}>
                    {/* <Display /> */}
                    <div style={{ flex: 1, padding: '2%' }}>
                        {/* Product name gets rendered here, will need to get from server*/}
                        <h1 style={{ fontSize: '2em' }}>Dog Clogs</h1>
                        <div>
                            This is where the product description goes
                        </div>
                        <div id='rightSideStuff'>
                            <div id='sizesContainer'>
                                <SizeButtons />
                            </div>
                            <div id='colorContainer'>
                                <ColorButtons />
                            </div>

                            <div style={{ paddingTop: '2%' }}>
                            <CheckoutBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductPage