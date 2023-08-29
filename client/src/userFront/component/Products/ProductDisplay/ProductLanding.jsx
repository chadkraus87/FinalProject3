import React, { useContext, useState, useEffect } from 'react';
import Name from '../Layout/Name';
import BannerIcons from '../Layout/BannerIcons';
import ProductPage from './ProductPage';


function ShopNav() {
    

    return (
        <div>
            <BannerIcons />
            <Name />
            <ProductPage />
        </div>
    );
}

export default ShopNav
