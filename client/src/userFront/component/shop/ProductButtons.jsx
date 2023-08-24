import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PetsIcon from '@mui/icons-material/Pets';

const products = ['Dog Socks', 'Cat Hats', 'Kitten Mittens'];

function ProductButtons() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',  // stack children vertically
        alignItems: 'center',     // center children horizontally
        justifyContent: 'center', // center children vertically
        height: '100%',
    };

    const btnContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',  // ensure it takes the full width
    };

    return (
        <div style={containerStyle}>
            <div style={{ marginBottom: '1rem' }}>More Products</div>
            <div style={btnContainerStyle}>
                <Stack direction="row" spacing={5}>
                    {products.map(product => (
                        <Button
                            key={product}
                            variant="outlined"
                            startIcon={<PetsIcon />}
                        >
                            {product}
                        </Button>
                    ))}
                </Stack>
            </div>
        </div>
    );
}

export default ProductButtons;
