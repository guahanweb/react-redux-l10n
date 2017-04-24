'use strict';

const initialState = {
  cart: {
    items: []
  }
};

function cartApp(state = initialState, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
    case 'CART_DELETE_ITEM':
      return Object.assign({}, state, {
        cart: updateCart(state.cart, action)
      });
    default:
      return state;
  }
}

function updateCart(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      for (let i = 0; i < state.items.length; i++) {
        let item = state.items[i];
        if (item.sku === action.item.sku) {
          // item exists, so update quantity
          state.items[i].qty += action.item.qty;
          return Object.assign({
            items: state.items
          });
        }
      }

      // sku didn't exist, so add it
      return Object.assign({
        items: [
          ...state.items,
          action.item
        ]
      });
      break;

    case 'CART_DELETE_ITEM':
      let items = state.items.filter((item, i) => {
        return action.item.sku !== item.sku;
      });
      return Object.assign({
        items: items
      });

    default:
      return state;
  }
}

module.exports = cartApp;
