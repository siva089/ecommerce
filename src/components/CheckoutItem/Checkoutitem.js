import React from 'react'
import "./CheckoutItem.styles.scss";
import {connect} from 'react-redux'
import {clearItemFromCart,IncreaseQuantity,DecreaseQuantity} from "../../Redux/Cart/Cart.action"

const CheckoutItem=({cartItem,clearItem,increasequantity,decreasequantity})=>{
const {name,imageUrl,price,quantity}=cartItem
return<div className='checkout-item'>
<div className="image-container">
<img src={imageUrl} alt="item"/>
</div>
<span className='name'>{name}</span>
<span className='quantity'>
    <div onClick={()=>cartItem.quantity==1?clearItem(cartItem):decreasequantity(cartItem)} className="arrow">&#10094;</div>
   <span className="value"> {quantity}</span>
    <div onClick={()=>increasequantity(cartItem)} className="arrow">&#10095;</div>
    </span>
<span className='price'>{price}</span>
<div onClick={()=>clearItem(cartItem)} className='remove-button'>&#10005;</div>
    </div>

}
const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item)),
    increasequantity:item=>dispatch(IncreaseQuantity(item)),
    decreasequantity:item=>dispatch(DecreaseQuantity(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)