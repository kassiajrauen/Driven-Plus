import styled from 'styled-components';

const Container = styled.div`
  background-color: #0e0e13;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .seta {
    margin-top: 24px;
    margin-left: 22px;
    height: 28px;
    width: 28px;
  }
  .logo-plano {
    height: 96px;
    margin-top: 50px;
    margin-left: 106px;
    width: 140px;
  }
  h1 {
    color: #ffffff;
    font-size: 32px;
    font-weight: 700;
    margin-top: 12px;
    margin-left: 106px;
    margin-bottom: 10px;
  }

  .infos-plan {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    font-weight: 400;
    color: #ffffff;

    p {
      font-size: 16px;
      margin-bottom: 10px;
      margin-top: 12px;
    }

    img {
      margin-right: 5px;
    }

    span {
      font-size: 14px;
    }
  }

  .infos-register {
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;

    input {
      background: #ffffff;
      border: 1px solid #ffffff;
      border-radius: 8px;
      color: #7e7e7e;
      font-size: 14px;
      font-weight: 400;
      height: 52px;
      padding-left: 14px;
      margin-bottom: 8px;
      width: 298px;
    }

    input::placeholder {
      color: #7e7e7e;
    }

    .card-infos {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 9px;

      input {
        width: 145px;
        padding-left: 6px;
      }
    }
  }
  .to-sign {
    background: #ff4791;
    border: 1px solid #ff4791;
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    height: 52px;
    margin-left: 40px;
    margin-top: 4px;
    width: 298px;
  }
`;

const Modal = styled.div`
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;

  .close {
    margin-left: 328px;
    margin-top: 26px;
    height: 24px;
    width: 24px;
  }

  .pop-up {
    width: 248px;
    height: 210px;
    background-color: #ffffff;
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding-left: 22px;
    padding-right: 22px;
    margin-top: 194px;
    margin-left: 64px;

    span {
    }

    .button {
      display: flex;
      flex-direction: row;
      padding-left: 22px;
      padding-right: 22px;
      margin-top: 40px;
      gap: 14px;
    }

    .cancel {
      width: 95px;
      height: 52px;
      color: #ffffff;
      background-color: #cecece;
      border: 1px solid #cecece;
      border-radius: 8px;
    }

    .confirm {
      width: 95px;
      height: 52px;
      color: #ffffff;
      background: #ff4791;
      border: 1px solid #ff4791;
      border-radius: 8px;
    }
  }
`;

export { Container, Modal };
