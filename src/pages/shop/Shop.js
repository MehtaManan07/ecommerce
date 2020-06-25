import React, { useState } from 'react'
import { SHOP_DATA } from '../../shared/ShopData'
import { useEffect } from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

const Shop = () => {
const [shop_data, setShop_data] = useState(SHOP_DATA)
 useEffect(() => {
     console.log(shop_data)
 },[])
    return (
        <div className="shop-page">
            {shop_data.map(({id, ...otherProps}) => (
                <PreviewCollection key={id} {...otherProps} />
            ))}
        </div>
    )
}

export default Shop
