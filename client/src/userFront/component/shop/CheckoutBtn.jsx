import * as React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';

export default function CheckoutBtn() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
        ADD TO CART
      </Button>
    </Stack>
  );
}
