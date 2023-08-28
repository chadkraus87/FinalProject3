import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ColorButtons({ label, colors = [] }) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend" id="productColors">{label || 'Colors'}</FormLabel>
        <RadioGroup
          row 
          aria-labelledby="colors"
          defaultValue={colors.length > 0 ? colors[0] : ""}
          name="product-colors"
        >
          {colors.map(color => (
            <FormControlLabel 
              key={color}
              value={color} 
              control={<Radio />} 
              label={color.charAt(0).toUpperCase() + color.slice(1)} 
              // label={color} 
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

