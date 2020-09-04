export const addItemToCart=(cartItems,cartItemToAdd)=>{
const existingCardItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id)
if(existingCardItem){
    return cartItems.map((el)=>{
        
       return el.id===cartItemToAdd.id?{...el,quantity:el.quantity+1}:el})
}

return [...cartItems,{...cartItemToAdd,quantity:1}]

}