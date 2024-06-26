// src/redux/reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  items: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const currentQuantity = state.items[product.id]?.quantity || 0;
      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: {
            ...product,
            quantity: currentQuantity + 1,
          },
        },
      };
    }
    case REMOVE_FROM_CART: {
      const product = action.payload;
      const currentQuantity = state.items[product.id]?.quantity || 0;
      if (currentQuantity <= 1) {
        const newItems = { ...state.items };
        delete newItems[product.id];
        return {
          ...state,
          items: newItems,
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: {
            ...product,
            quantity: currentQuantity - 1,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
