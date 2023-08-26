import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SizeButtons({ sizes = [], label }) {
  // handle if there are no sizes.
  if (!sizes || sizes.length === 0) return <p>No sizes available.</p>;

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend" id="productSize">{label || 'Sizes'}</FormLabel>
        <RadioGroup
          row 
          aria-labelledby="size"
          defaultValue="small"
          name="product-size"
        >
          {sizes.map(size => (
            <FormControlLabel 
              key={size}
              value={size.toLowerCase()} 
              control={<Radio />} 
              label={size.charAt(0).toUpperCase() + size.slice(1)} 
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
