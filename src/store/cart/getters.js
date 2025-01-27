export function isCartOpen(state){
    return state.isCartOpen;
}
export function userCarts(state){
    return state.userCarts;
}

export function cartItemsLength(state){   
  return state.cartItemsLength;
}

export function fetchCartLoading(state){   
  return state.fetchCartLoading;
}

export function cartId(state){
  return state.userCarts[0].id
}