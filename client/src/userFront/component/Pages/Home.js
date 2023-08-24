import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Home() {

  const Name = {
    fontFamily: "'Marck Script', cursive",
    fontSize: '8rem',
    fontWeight: '900',
    textAlign: 'center',
    color: '#5271FF',
    lineHeight: '8rem',
  }

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // This assumes you want it to be centered in the viewport height
  }


  return (
    <div style={centerStyle}>
      <div style={Name}>Furry Feet 
      < br/>Friends</div>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">
          About Us
        </Button>
        <Button variant="outlined">
          Buy
        </Button>
      </Stack>
    </div>
  );
}

export default Home


