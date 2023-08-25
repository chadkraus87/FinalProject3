import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PetsIcon from '@mui/icons-material/Pets';

function ProductButtons() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("/api/products") //replace with api endpoint from chad
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%',
    };

    const btnContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    const productTitle = { 
        marginBottom: '1rem', 
        fontFamily: 'Arial, sans-serif',
        fontWeight: '600',
        fontSize: "1.5rem"
    }

    return (
        <div style={containerStyle}>
            <div style={productTitle}>More Products</div>
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
