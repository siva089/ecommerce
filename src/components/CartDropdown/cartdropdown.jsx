import React from 'react'
import CustomButton from  "../CustomButton/CustomButton";
import {connect} from "react-redux"
import CartItem from "../cart-item/cart-item"
import {selectCartItems} from "../../Redux/Cart/Cart.selectors"
import {createStructuredSelector} from "reselect"
import './cartdropdown.scss'
import {withRouter} from "react-router-dom"
import {toggleCartHidden} from "../../Redux/Cart/Cart.action"

const Cart=({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
{
    cartItems.length?cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />):<span className="empty-message">Your cart is empty</span>
}

        </div>
        <CustomButton onClick={()=>{history.push(`/checkout`);dispatch(toggleCartHidden())}}>Go To CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems   
})

export default withRouter(connect(mapStateToProps)(Cart))