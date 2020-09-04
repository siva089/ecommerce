import CardActionType from "./Cart.types"
import {addItemToCart} from "./cart.utils"
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
default:
  return state  

}

}

export default CartReducer