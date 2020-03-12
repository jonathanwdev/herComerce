import produce from 'immer';

const INITIAL_DATA = {
  cart: [],
  cartStatus: false,
};

export default function cart(state = INITIAL_DATA, action) {
  switch (action.type) {
    case '@cart/CHANGE_STATUS':
      return produce(state, draft => {
        draft.cartStatus = !draft.cartStatus;
      });

    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.cart.push(product);
        draft.cartStatus = true;
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.cart.findIndex(
          p => p.size.sku === action.id
        );
        if (productIndex >= 0) {
          draft.cart.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.cart.findIndex(
          p => p.size.sku === action.id
        );
        if (productIndex >= 0) {
          draft.cart[productIndex].amount = Number(action.amount);
          draft.cartStatus = true;
        }
      });
    }
    default:
      return state;
  }
}
