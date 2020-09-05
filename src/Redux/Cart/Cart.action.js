import CartActionType from "./Cart.types"
import CartActionTypes from "./Cart.types"

export const toggleCartHidden=()=>({
    type:CartActionType.TOGGLE_CART_HIDDEN
})

export const addItem=(item)=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})

export const clearItemFromCart=item=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const IncreaseQuantity=item=>({
    type:CartActionType.ADD_QUANTITY,
    payload:item
})

export const DecreaseQuantity=item=>({
    type:CartActionType.DECREASE_QUANTITY,
    payload:item
})