import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ index, size }) {
  if (!size) {
    toast.error('Selecione um tamanho');
    return;
  }
  const response = yield call(api.get, 'products');
  const productExists = yield select(state =>
    state.cart.cart.find(s => s.size.sku === size.sku)
  );

  const sizeExists = response.data[index].sizes.some(prod => {
    return prod.sku === size.sku;
  });

  if (!sizeExists) {
    toast.error('Selecione o tamanho do produto correto');
    return;
  }

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmountSuccess(size.sku, amount));
  } else {
    const data = {
      ...response.data[index],
      size,
      amount: 1,
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
