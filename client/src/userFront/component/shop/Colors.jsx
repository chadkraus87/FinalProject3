import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ColorButtons({ label }) {
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
      fetch("/api/colors")    // Update to API Endpoint from Chad
          .then(response => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.json();
          })
          .then(data => setColors(data))
          .catch(error => console.error("Error fetching colors:", error));
  }, []);

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend" id="productColors">{label || 'Colors'}</FormLabel>
        <RadioGroup
          row 
          aria-labelledby="colors"
          defaultValue={colors[0]}
          name="product-colors"
        >
          {colors.map(color => (
            <FormControlLabel 
              key={color}
              value={color} 
              control={<Radio />} 
              label={color} 
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
