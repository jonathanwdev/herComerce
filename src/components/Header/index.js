import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { changeCartStatus } from '~/store/modules/cart/actions';

import { Container, Cart } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const cartStatus = useSelector(state => state.cart.cartStatus);
  const totalItems = useSelector(state => state.cart.cart);

  function handleChangeCart() {
    dispatch(changeCartStatus(cartStatus));
  }

  return (
    <Container>
      <nav>
        <Link to="/">
          Her<span>Comerce</span>
        </Link>
        <aside>
          <Cart type="button" onClick={handleChangeCart}>
            <div>
              <p>Meu Carrinho</p>
              <p>{totalItems.length || 0} Itens</p>
            </div>
            <FaShoppingCart color="#9175d8" size={34} />
          </Cart>
        </aside>
      </nav>
    </Container>
  );
}
