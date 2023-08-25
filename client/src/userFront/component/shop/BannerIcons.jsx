import React from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartCount from './CartCount';

function BannerIcons() {
    const iconStyle = {
        fontSize: "5vh",
    }

    const iconPlacement = {
        textAlign: 'right',
        padding: '1%',
    }

    return (
        <div style={{ ...iconPlacement, ...iconStyle }}>
             <Link to="/">
            <HomeIcon style={iconStyle} />
            </Link>
            <Link to="/adminDashboard">
                <AccountBoxIcon style={iconStyle} />
            </Link>
            <Link to="/Cart">
            <ShoppingCartIcon style={iconStyle} />
            <CartCount />
            </Link>
        </div>
    )
}

export default BannerIcons;
