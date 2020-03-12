import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  padding: 0 20px;

  nav {
    margin: 0 auto;
    height: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 4rem;
      color: #ffb7db;
      font-weight: bold;

      span {
        color: #9175d8;
        font-size: 5rem;
        font-weight: normal;
        font-family: 'Engagement', cursive;
      }
    }

    aside {
      height: 100%;
    }
  }
`;

export const Cart = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  border: 0;
  background: none;

  div {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 10px;
    text-align: right;

    @media (max-width: 425px) {
      display: none;
    }

    p:nth-child(1) {
      font-size: 1.4rem;
      font-weight: bold;
      color: #9175d8;
    }
    p:nth-child(2) {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;
