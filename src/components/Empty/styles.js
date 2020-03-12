import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(145, 117, 216, 0.1);
  border: 2px solid #ccc;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    transform: rotate(-45deg);
    color: #ccc;
    font-size: 3rem;
  }
`;
