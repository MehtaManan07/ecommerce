import React, { useState } from 'react'
import { SHOP_DATA } from '../../shared/ShopData'

const Shop = () => {
const [shop_data, setShop_data] = useState(SHOP_DATA)    
    return (
        <div>
            SHOP PAGE
        </div>
    )
}

export default Shop
