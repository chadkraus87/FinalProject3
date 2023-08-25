import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SizeButtons({ label }) {
  const [sizes, setSizes] = React.useState([]);

  React.useEffect(() => {
      fetch("/api/sizes")   // Update to API Endpoint from Chad
          .then(response => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.json();
          })
          .then(data => setSizes(data))
          .catch(error => console.error("Error fetching sizes:", error));
  }, []);

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
