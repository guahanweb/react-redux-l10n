'use strict';

module.exports = {
  addItem: addItem,
  deleteItem: deleteItem
};

function deleteItem(sku) {
  return function (dispatch, getState) {
    let item = {
      sku: sku
    };

    dispatch({
      type: 'CART_DELETE_ITEM',
      item
    });
  };
}

function addItem(sku, qty) {
  return function (dispatch, getState) {
    let item = {
      sku: sku,
      qty: qty
    };

    // ajax request to add item
    dispatch({
      type: 'CART_ADD_ITEM',
      item
    });
  };
}
