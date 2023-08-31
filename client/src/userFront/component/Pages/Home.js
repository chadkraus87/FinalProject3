import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import BannerIcons from '../Products/Layout/BannerIcons';

function Home() {

  const NameMain = {
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
    height: '100vh', 
  }


  return (
    <div>
      <BannerIcons />
    <div style={centerStyle}>
      <div id='furff' style={NameMain}>Furry Feet 
      < br/>Friends</div>
      <Stack direction="row" spacing={2}>
        <Link to="/about">
        <Button variant="outlined">
          About Us
        </Button>
        </Link>
        {/* <Link to="/Shop">
        <Button variant="outlined">
          Shop
        </Button>
        </Link> */}
      </Stack>
    </div>
    </div>
  );
}

export default Home


