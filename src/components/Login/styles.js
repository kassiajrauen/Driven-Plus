import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color: #0e0e13;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  img {
    margin-bottom: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }

  input {
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 8px;
    box-sizing: borderbox;
    color: #7e7e7e;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 52px;
    padding-left: 14px;
    margin-bottom: 16px;
    width: 298px;
  }

  input::placeholder {
    color: #7e7e7e;
  }

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
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  margin-top: 24px;
`;

export { Container, StyledLink };
