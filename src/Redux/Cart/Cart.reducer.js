import CardActionType from "./Cart.types"

const initialState={
    hidden:true
}

const CartReducer=(state=initialState,action)=>{

switch(action.type){

case CardActionType.TOGGLE_CART_HIDDEN :
    return{
        ...state,
        hidden:!state.hidden
    }

default:
  return state  

}

}

export default CartReducer