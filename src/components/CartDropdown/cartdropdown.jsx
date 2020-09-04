import React from 'react'
import CustomButton from  "../CustomButton/CustomButton";
import {connect} from "react-redux"
import CartItem from "../cart-item/cart-item"
import {selectCartItems} from "../../Redux/Cart/Cart.selectors"
import './cartdropdown.scss'

const Cart=({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
{
    cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
}

        </div>
        <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=(state)=>({
cartItems:selectCartItems(state)    
})

export default connect(mapStateToProps)(Cart)