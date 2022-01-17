import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: #0e0e13;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  min-height: 100vh;

  h1 {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  div {
    align-items: center;
    background-color: transparent;
    border: 3px solid #7e7e7e;
    border-radius: 12px;
    display: flex;
    height: 180px;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0 16px;
    width: 290px;
  }

  div img {
    height: 96px;
    width: 140px;
  }

  div span {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
`;

export { Container };
