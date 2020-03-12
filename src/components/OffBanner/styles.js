import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  background: #ffb7db;
  margin: 20px auto;
  border-radius: 25px;
  padding: 20px;

  @media (max-width: 900px) {
    width: 95%;
  }

  div {
    margin: auto;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h2 {
      font-size: 12rem;
      color: #9175d8;
      font-family: 'Engagement', cursive;
    }

    h1 {
      font-size: 4rem;
      color: #9175d8;

      @media (max-width: 505px) {
        text-align: center;
      }
    }

    button {
      background: rgba(255, 255, 255, 0.7);
      border: 0;
      height: 4rem;
      padding: 1.5rem;
      color: rgba(1, 1, 1, 0.8);
      border-radius: 8px;
      font-weight: bold;
      font-size: 1.2rem;

      transition: all 0.3s ease;

      &:hover {
        background: #9175d8;
        color: #fff;
      }
    }
  }
`;
