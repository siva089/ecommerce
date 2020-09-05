import CardActionType from "./Cart.types"
import {addItemToCart} from "./cart.utils"
import CartActionTypes from "./Cart.types"
const initialState={
    hidden:true,
    cartItems:[]
}

const CartReducer=(state=initialState,action)=>{

switch(action.type){

case CardActionType.TOGGLE_CART_HIDDEN :
    return{
        ...state,
        hidden:!state.hidden
    }
case CardActionType.ADD_ITEM:
    return{
        ...state,
        cartItems:addItemToCart(state.cartItems,action.payload)
    }
 case CartActionTypes.CLEAR_ITEM_FROM_CART:
     return{
         ...state,
         cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
     }  
     
 case CartActionTypes.ADD_QUANTITY:
     return{
         ...state,
         cartItems:state.cartItems.map(cartItem=>{
             if(cartItem.id===action.payload.id){
                 return {
                     ...cartItem,quantity:cartItem.quantity+1
                 }
             }
             return cartItem
         }) 
     } 
     case CartActionTypes.DECREASE_QUANTITY:
        return{
            ...state,
            cartItems:state.cartItems.map(cartItem=>{
                if(cartItem.id===action.payload.id){
                   
                    return {
                        ...cartItem,quantity:cartItem.quantity-1
                    }
                }
                return cartItem
            }) 
        }

default:
  return state  

}

}

export default CartReducer