import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SizeButtons({ label }) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend" id="productSize">Sizes</FormLabel>
        <RadioGroup
          row 
          aria-labelledby="size"
          defaultValue="small"
          name="product-size"
        >
          <FormControlLabel value="small" control={<Radio />} label="Small" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="large" control={<Radio />} label="Large" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
