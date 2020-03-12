import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 15px auto;
`;

export const ClothesList = styled.ul`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 258px));
  grid-row-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media (max-width: 900px) {
    width: 95%;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    justify-content: center;
  }

  li {
    width: 100%;
    height: 423px;
    background: #9175d8;
    border-radius: 51px;
    position: relative;

    @media (max-width: 900px) {
      width: 85%;
      height: 378.4px;
      justify-self: center;
    }

    @media (max-width: 700px) {
      width: 80%;
      height: 338.4px;
      justify-self: center;
    }

    img {
      width: 100%;
      height: 60%;
      border-radius: 50px;
      border: 1px solid #9175d8;
    }

    footer {
      height: 150px;
      padding: 5px 1.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 1.5rem;
        color: #fdd3fc;
        text-align: center;
      }
    }
  }
`;

export const FloatValue = styled.span`
  position: absolute;
  width: 120px;
  height: 50px;
  font-size: 4rem;
  color: #f2050590;
  right: calc(50% - 65px);
  bottom: calc(50% + 20px);
  transform: rotate(-45deg);
`;

export const PriceList = styled.div`
  display: flex;
  justify-content: ${props => (props.hasOff ? 'space-between' : 'center')};
  margin-top: 5px;

  p {
    color: #fdd3fc;
    font-size: 1.3rem;
  }
`;

export const SizeList = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props =>
    props.hasDiffSizes ? 'space-between' : 'center'};
  margin: 15px 0;
`;

export const Item = styled.button`
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  border: 0;
  background: ${props => (props.active ? '#ffb7db' : '#fff')};
  text-align: center;
  transition: all 0.3s ease;
  color: ${props => (props.active ? '#fff' : '#9175d8')};
  opacity: ${props => (props.available ? 1 : 0.4)};
  cursor: ${props => (props.available ? 'pointer' : 'default')};

  @media (max-width: 900px) {
    width: 18px;
    height: 18px;
    line-height: 18px;
    border-radius: 5px;
  }

  &:hover {
    background: ${props => (props.available ? '#ffb7db' : null)};
    color: ${props => (props.available ? '#fff' : null)};
  }
`;

export const CartButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 16px;
  background: #fff;
  border: 0;
  transition: all 0.3s ease;
  font-weight: bold;
  color: #9175d8;
  align-self: flex-end;

  @media (max-width: 900px) {
    height: 30px;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  @media (max-width: 700px) {
    height: 30px;
    margin-bottom: 25px;
  }

  &:hover {
    background: #ffb7db;
    color: #fff;
  }
`;
