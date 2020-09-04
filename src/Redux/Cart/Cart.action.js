import CartActionType from "./Cart.types"
import CartActionTypes from "./Cart.types"

export const toggleCartHidden=()=>({
    type:CartActionType.TOGGLE_CART_HIDDEN
})

export const addItem=(item)=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})