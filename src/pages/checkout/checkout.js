import React from 'react'
import "./checkout.scss"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCartItems,selectCartTotal} from "../../Redux/Cart/Cart.selectors"
import CartItem from '../../components/cart-item/cart-item'
import CheckoutItem from "../../components/CheckoutItem/Checkoutitem"
const checkoutPage=({cartItems,total})=>(
    <div className='checkout-page'>
     <div className="checkout-header">
         <div className="header-block">
             <span>Product</span>
         </div>
         <div className="header-block">
             <span>Description</span>
         </div>
         <div className="header-block">
             <span>Quantity</span>
         </div>
         <div className="header-block">
             <span>Price</span>
         </div>
         <div className="header-block">
             <span>Remove</span>
         </div>
     </div>
     {cartItems.map(CartItem=><CheckoutItem key={CartItem.id} cartItem={CartItem} />)}

     <div className="total">
         <span>Total:${total}</span>
     </div>
    </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(checkoutPage);