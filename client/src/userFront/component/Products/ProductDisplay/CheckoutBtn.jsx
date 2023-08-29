import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';



function CheckoutBtn() {
  
  const shadow = {
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid transparent',
};


  return (
    <Stack direction="row" spacing={2}>
      <div style={shadow} >
      <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
        ADD TO CART
      </Button>
      </div>
    </Stack>
  );
}

export default CheckoutBtn

