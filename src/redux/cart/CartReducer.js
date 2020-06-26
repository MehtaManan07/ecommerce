const { TOGGLE_CART_HIDDEN, ADD_ITEM } = require("../types");

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
        cartItems: [...state.cartItems, payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
