import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container } from './styles';
import api from '~/services/api';

export default function OffBanner() {
  const [percentage, setPercentage] = useState([]);

  useEffect(() => {
    async function loadDiscount() {
      try {
        const response = await api.get('/products');
        const data = response.data.map(product => {
          const newString = product.discount_percentage.split('%').join('');
          return newString;
        });
        const MaxDiscount = Math.max(...data);
        setPercentage(MaxDiscount);
      } catch (err) {
        toast.error('Erro ao carregar dados :(');
      }
    }
    loadDiscount();
  }, []);

  return (
    <Container>
      <div>
        <h2>Off</h2>
        <h1>Até {percentage}% de desconto</h1>
        <button type="button">Saber mais</button>
      </div>
    </Container>
  );
}
