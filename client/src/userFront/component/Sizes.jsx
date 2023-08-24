import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SizeButtons({ label }) {
  return (
    <div>
    <Stack direction="row" spacing={2}>
      <Button variant="outlined">
      {label}
      </Button>
    </Stack>
    </div>
  );
}

