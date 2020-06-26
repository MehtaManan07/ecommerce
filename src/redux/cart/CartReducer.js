import { addCartItem } from "./CartUtils";

import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../types"

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

