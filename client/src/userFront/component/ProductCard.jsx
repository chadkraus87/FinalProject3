import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Animals from './Animals';

export default function OutlinedCard() {
  return (
    <Box 
      sx={{
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',  // 100% of the viewport height
        width: '52vw'   // 100% of the viewport width
      }}
    >
      <Card 
        variant="outlined"
        sx={{
        //   width: '70vw',   // 50% of the viewport width
          height: '70vh',  // 50% of the viewport height
        }}
      >
        <CardContent>
          <Animals />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Clogs4All
          </Typography>
          <Typography variant="h5" component="div">
            Dog Clogs
          </Typography>
          <Typography variant="body2">
            Small - Medium - Large
          </Typography>
          <Typography variant="body2">
            Green - Black - Red - Blue
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart!</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
