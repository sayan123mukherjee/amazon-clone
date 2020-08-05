import React from 'react';
import './Cart.scss'

interface CartProps{
    count: number
}

const Cart: React.FC<CartProps> = ({count}) => {
    return (
        <div className="header__cart">
            <span className="material-icons header__cart--icon">shopping_cart</span>
            <span className="header__cart--count">{count}</span>
        </div>
    )
}

export default Cart;