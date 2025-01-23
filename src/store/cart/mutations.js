
export const setIsCartOpen= (state,status) => state.isCartOpen=status

export const toggleCartStatus =(state)=> state.isCartOpen=!state.isCartOpen

export const setUserCarts =(state,items)=> state.userCarts=items 

export const setCartItemsLength =(state,length)=> state.cartItemsLength=length 