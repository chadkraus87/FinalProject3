import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PetsIcon from '@mui/icons-material/Pets';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCT_IDS } from '../../../utils/queries';



function ProductButtons({ setSelectedProductId }) {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCT_IDS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data);

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
    };

    return (
        <div style={containerStyle}>
            <div style={productTitle}>More Products</div>
            <div style={btnContainerStyle}>
                <Stack direction="row" spacing={5}>
                    {data.getAllProducts.map(product => (
                        <Button
                            key={product._id}
                            variant="outlined"
                            startIcon={<PetsIcon />}
                            onClick={() => setSelectedProductId(product._id)}
                        >
                            {product.name}
                        </Button>
                    ))}

                </Stack>
            </div>
        </div>
    );
}

export default ProductButtons;
