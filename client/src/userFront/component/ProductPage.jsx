import * as React from 'react';
import SizeButtons from './Sizes'
import ColorButtons from './Colors'
// import IconLabelButtons from './CheckoutBtn'
import Display from './Animals'
import Stack from '@mui/material/Stack';
import { useCart } from './cartContext';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PetsIcon from '@mui/icons-material/Pets';


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

    return (
        <div>
        <div style={{fontFamily: "'Marck Script', cursive", fontSize:'5rem', textAlign: 'center'}}>Furry Feet Friends</div>
            <div style={{padding: '1%', paddingTop: '1%', paddingLeft: '5%'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <Stack direction="row" spacing={6}>
        <Button
            variant="outlined"
            // onClick={newProduct}
            startIcon={<PetsIcon />}
        >
            Dog Socks
        </Button>
        <Button
            variant="outlined"
            // onClick={newProduct}
            startIcon={<PetsIcon />}
        >
            Cat Hats
        </Button>
        <Button
            variant="outlined"
            // onClick={newProduct}
            startIcon={<PetsIcon />}
        >
            Kitten Mittens
        </Button>
    </Stack>
</div>

            <div style={{ display: 'flex', padding: '1%', paddingTop: '5%', paddingLeft: '5%', justifyContent: 'space-between' }}>
                {/* <h4>On the left</h4> */}

                <Display />
                <div style={{ flex: 1, padding: '2%' }}>
                    {/* Product name gets rendered here */}
                    <h1 style={{ fontSize: '2em' }}>Dog Clogs</h1>
                    {/* Who make the product gets rendered here */}
                    <h2>Clogs4All</h2>
                    <div>
                        This is where the product description goes
                    </div>
                    <div id='rightSideStuff'>
                        <div id='sizesContainer'>
                            <h2>Sizes</h2>
                            <Stack direction="row" spacing={2}>
                                {sizes.map((size) => (
                                    <ColorButtons
                                        key={size}
                                        label={size}
                                        onClick={() => handleSizeClick(size)}
                                        selected={size === selectedSize}  // This prop is to visualize which size is currently selected. You'd have to handle it in your ColorButtons component.
                                    />
                                ))}
                            </Stack>
                        </div>
                        <div id='colorContainer'>
                            <h2>Colors</h2>
                            <Stack direction="row" spacing={2}>
                                {colors.map((color) => (
                                    <SizeButtons
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