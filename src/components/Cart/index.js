import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeCartStatus,
  removeFromCart,
  updateAmountRequest,
} from '~/store/modules/cart/actions';

import { formatPrice } from '~/Util/format';
import Empty from '~/components/Empty';

import { Container, CartList, Info, ProductAmount, TotalBox } from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const cartStatus = useSelector(state => state.cart.cartStatus);

  const products = useSelector(state =>
    state.cart.cart.map(p => {
      const priceFormatted =
        p.actual_price
          .split('R$')
          .join('')
          .replace(',', '.') || 0;
      return {
        ...p,
        priceFormatted,
      };
    })
  );

  const total = formatPrice(
    products.reduce((tt, product) => {
      return tt + product.priceFormatted * product.amount;
    }, 0)
  );

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }
  function handleChangeCart() {
    dispatch(changeCartStatus(cartStatus));
  }

  function increment(product) {
    dispatch(updateAmountRequest(product.size.sku, product.amount + 1));
  }
  function decrement(product) {
    dispatch(updateAmountRequest(product.size.sku, product.amount - 1));
  }

  return (
    <Container cartStatus={cartStatus}>
      <header>
        <h1>Meus pedidos</h1>
        <button type="button" onClick={handleChangeCart}>
          X
        </button>
      </header>
      <CartList>
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <li key={index}>
                <img
                  src={
                    product.image
                      ? product.image
                      : 'https://reformabrasil.com.br/images/icons/nopic.jpg'
                  }
                  alt={product.name}
                />
                <aside>
                  <Info>
                    <p>
                      {product.name} ({product.size.currentSize})
                    </p>
                    <p>
                      <strong>Preço: </strong> {product.regular_price}
                    </p>
                    <p>
                      <strong>Off: </strong>
                      {product.discount_percentage || '0%'}
                    </p>
                    <p>
                      <strong>Valor Final:</strong> {product.actual_price}
                    </p>
                  </Info>
                  <ProductAmount>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <IoMdRemove size={10} color="#9175d8" />
                      </button>
                      <div>{product.amount}</div>
                      <button type="button" onClick={() => increment(product)}>
                        <IoMdAdd size={10} color="#9175d8" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFromCart(product.size.sku)}
                    >
                      <FaTrashAlt size={16} color="#9175d8" />
                    </button>
                  </ProductAmount>
                </aside>
              </li>
            );
          })
        ) : (
          <Empty />
        )}
      </CartList>
      <TotalBox>
        <h1>Total a pagar</h1>
        <div>
          <h2>{total}</h2>
        </div>
      </TotalBox>
    </Container>
  );
}
