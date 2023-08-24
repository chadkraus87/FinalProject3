import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ColorButtons({ label }) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend" id="productColors">Colors</FormLabel>
        <RadioGroup
          row 
          aria-labelledby="colors"
          defaultValue="small"
          name="product-colors"
        >
          <FormControlLabel value="Red" control={<Radio />} label="Red" />
          <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
          <FormControlLabel value="Green" control={<Radio />} label="Green" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
