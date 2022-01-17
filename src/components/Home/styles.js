import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    background-color: #0E0E13; 
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

h1{
    margin-bottom: 53px;
    margin-top: 12px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
}

button{
    background: #FF4791;
    border: 1px solid #FF4791;
    border-radius: 8px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    height: 52px;
    margin-top: 8px;
    width: 298px;
}
`;

export {
    Container,
}