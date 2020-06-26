export const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd
  );

  if(existingCartItem) {
      return cartItems.map(item => item.id === cartItemToAdd.id ? {...item, quantity: item.quantity + 1 }: item )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]

};
