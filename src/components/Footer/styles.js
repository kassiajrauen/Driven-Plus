import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: #0e0e13;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 240px;

  button {
    background: #ff4791;
    border: 1px solid #ff4791;
    border-radius: 8px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    height: 52px;
    margin-top: 8px;
    width: 298px;
  }
  .cancel {
    background-color: #ff4747;
  }
`;

export { Container };
