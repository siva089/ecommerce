import React from 'react'
import CustomButton from  "../CustomButton/CustomButton";

import './cartdropdown.scss'

const Cart=()=>(
    <div className="cart-dropdown">
        <div className="card-items"></div>
        <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
)

export default Cart