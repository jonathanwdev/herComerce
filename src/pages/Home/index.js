import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { addToCartRequest } from '~/store/modules/cart/actions';
import api from '~/services/api';

import {
  Container,
  ClothesList,
  SizeList,
  Item,
  FloatValue,
  PriceList,
  CartButton,
} from './styles';

import OffBanner from '~/components/OffBanner';
import Cart from '~/components/Cart';

export default function Home() {
  const [clothes, setClothes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const dispatch = useDispatch();

  console.tron.log(window.innerWidth);

  function handleAddToCart(index, size) {
    dispatch(addToCartRequest(index, size));
  }

  useEffect(() => {
    async function loadClothes() {
      try {
        const response = await api.get('/products');
        setClothes(response.data);
      } catch (err) {
        toast.error('Erro ao carregar dados');
      }
    }
    loadClothes();
  }, []);

  return (
    <Container>
      <OffBanner />
      <Cart />
      <ClothesList>
        {clothes.map((clothe, index1) => {
          return (
            <li key={index1}>
              <img
                src={
                  clothe.image
                    ? clothe.image
                    : 'https://reformabrasil.com.br/images/icons/nopic.jpg'
                }
                alt={clothe.style}
              />
              {clothe.discount_percentage ? (
                <FloatValue>{clothe.discount_percentage} Off</FloatValue>
              ) : null}
              <footer>
                <h1>{clothe.name}</h1>
                <PriceList hasOff={clothe.discount_percentage}>
                  <p>{clothe.regular_price}</p>
                  {clothe.discount_percentage ? (
                    <p>Por {clothe.actual_price}</p>
                  ) : null}
                </PriceList>
                <SizeList hasDiffSizes={clothe.sizes.length > 3}>
                  {clothe.sizes.map((size, index2) => {
                    function select(sku, currentSize) {
                      setSelectedSize(null);
                      setSelectedSize({ sku, currentSize });
                    }
                    return (
                      <Item
                        key={index2}
                        onClick={() => select(size.sku, size.size)}
                        active={
                          selectedSize ? size.sku === selectedSize.sku : null
                        }
                        available={size.available}
                        disabled={!size.available}
                      >
                        {size.size}
                      </Item>
                    );
                  })}
                </SizeList>
                <CartButton
                  type="button"
                  onClick={() => handleAddToCart(index1, selectedSize)}
                >
                  ADICIONAR AO CARRINHO
                </CartButton>
              </footer>
            </li>
          );
        })}
      </ClothesList>
    </Container>
  );
}
