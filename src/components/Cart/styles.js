import styled from 'styled-components';

export const Container = styled.aside`
  width: ${props => (props.cartStatus ? '30vw' : '0vw')};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
  background: #fff;
  overflow: hidden;
  box-shadow: -3px 1px 5px 0px rgba(145, 117, 216, 1);
  transition: all 0.3s ease;

  @media (max-width: 1300px) {
    width: ${props => (props.cartStatus ? '40vw' : '0vw')};
    max-height: 100%;
  }

  @media (max-width: 1000px) {
    width: ${props => (props.cartStatus ? '50%' : '0vw')};
    max-height: 100%;
  }

  @media (max-width: 743px) {
    width: ${props => (props.cartStatus ? '100vw' : '0vw')};
    max-height: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    h1 {
      color: #9175d8;
    }

    button {
      font-size: 20px;
      border: 0;
      background: none;
      padding: 3px 5px;
      color: red;
    }
  }
`;

export const CartList = styled.ul`
  padding: 20px;
  overflow-y: scroll;
  max-height: 350px;
  height: 350px;

  @media (max-width: 425px) {
    max-height: 270px;
    height: 270px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding-left: 5px;
    border-radius: 10px;
    border: 1px solid #9175d8;

    & + li {
      margin-top: 5px;
    }

    img {
      width: 65px;
      height: 65px;
      border-radius: 25%;
    }

    aside {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 10px;
      background: #ffb7db;
      border-radius: 25px 6px 6px 25px;
      width: 80%;
      justify-content: space-between;
    }
  }
`;
export const Info = styled.div`
  p:nth-child(1) {
    color: #9175d8;
    font-weight: bold;
    font-size: 1.2rem;
  }
  p {
    font-size: 1.1rem;
    color: #9175d8;
  }
  strong {
    color: #fff;
  }
`;

export const ProductAmount = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  justify-content: space-around;

  div {
    display: flex;

    button {
      width: 25px;
      height: 25px;
      background: #fff;
      border: 0;
      border-radius: 4px;
    }

    div {
      min-width: 20px;
      margin: 0 2px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ffb7db;
      color: #fff;
      font-weight: bold;
      border-radius: 4px;
    }
  }

  button {
    border: 0;
    background: none;
  }
`;

export const TotalBox = styled.footer`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  h1 {
    color: #9175d8;
    margin-top: 10px;
  }

  div {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 150px;
    background: rgba(145, 117, 216, 0.1);
    border-radius: 25px;

    h2 {
      font-size: 3rem;
      color: rgba(0, 0, 0, 0.8);
      font-family: 'Engagement', cursive;
    }
  }
`;
