import React from 'react'
import {ReactComponent as SHOPICON} from '../../assets/ShopBag.svg'
import './CartIcon.scss'
const CartIcon = () => {
    return (
        <div className="cart-icon">
            <SHOPICON className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}

export default CartIcon
