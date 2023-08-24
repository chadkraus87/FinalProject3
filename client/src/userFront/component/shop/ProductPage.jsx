import * as React from 'react';
import SizeButtons from './Sizes'
import ColorButtons from './Colors'
// import IconLabelButtons from './CheckoutBtn'
import Display from './ProductDisplay'
import Stack from '@mui/material/Stack';
import { useCart } from './cartContext';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BannerIcons from './BannerIcons';
import ProductButtons from './ProductButtons';



const sizes = ['Small', 'Medium', 'Large']
const colors = ['Red', 'Blue', 'White', 'Black',]

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
    const { addToCart } = useCart(); // 1. Access addToCart from the cart context

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

    const name = {
        fontFamily: "'Marck Script', cursive",
        fontSize: '5rem',
        fontWeight: '900',
        textAlign: 'center',
        color: '#5271FF',
        marginTop: '-5rem',
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
            <div style={name}>Furry Feet Friends</div>
            <div style={btns}>
                <ProductButtons />
                <div style={productContainer}>
                    <Display />
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
                                <h2>Colors</h2>
                                <Stack direction="row" spacing={2}>
                                    {colors.map((color) => (
                                        <ColorButtons
                                            key={color}
                                            label={color}
                                            onClick={() => handleColorClick(color)}
                                            selected={color === selectedColor}  // Same as above, but for colors.
                                        />
                                    ))}
                                </Stack>
                            </div>

                            <div style={{ paddingTop: '2%' }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<ShoppingCartIcon />}
                                    onClick={handleAddToCart}
                                >
                                    ADD TO CART
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductPage