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
            <HomeIcon style={iconStyle} />
            <AccountBoxIcon style={iconStyle} />
            <ShoppingCartIcon style={iconStyle} />
            <CartCount />
        </div>
    )
}

export default BannerIcons