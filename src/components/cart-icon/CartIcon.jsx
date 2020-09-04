import React from 'react'
import {connect} from "react-redux"
import {toggleCartHidden} from "../../Redux/Cart/Cart.action"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import {selectCartItemsCount} from "../../Redux/Cart/Cart.selectors"
import "./CartIcon.scss"

const CartIcon =({toggleCartHidden,itemCount=0})=>(
<div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
<span className="item-count">{itemCount}</span>
</div>
)

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=(state)=>({
    itemCount:selectCartItemsCount(state)
    // state.cart.cartItems.length
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)