import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { Container, Modal } from './style';
import { PlanContext } from '../../contexts/PlanContext';
import { AuthContext } from '../../contexts/AuthContext';
import { DataCardContext } from '../../contexts/DataCardContext';
import { DataPlanContext } from '../../contexts/DataPlanContext';
import { useNavigate } from 'react-router-dom';

function Plan() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [plan, setPlan] = useState();
  const [modal, setModal] = useState(false);

  const [user] = useContext(AuthContext);
  const [id] = useContext(PlanContext);
  const [, setDataCard] = useContext(DataCardContext);
  const [, setDataPlan] = useContext(DataPlanContext);

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    promise
      .then((response) => {
        setPlan(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);

  function handlePlan() {
    const dataCard = {
      membershipId: id,
      cardName: cardName,
      cardNumber: cardNumber,
      securityNumber: securityNumber,
      expirationDate: expirationDate,
    };

    console.log(dataCard);
    const promise = axios.post(
      'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',
      dataCard,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setTimeout(() => {
      promise.then((response) => {
        setDataPlan(response.data);
        setDataCard(dataCard);
        navigate('/home');
      });
    }, 3000);
    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

  return (
    <Container>
      <img
        className='seta'
        src='../../assets/seta.png'
        alt=''
        onClick={() => navigate('/subscriptions')}
      />
      <img className='logo-plano' src={plan?.image} alt='' />
      <h1>{plan?.name}</h1>
      <div className='infos-plan'>
        <p>
          <img src='../../assets/planilha.png' alt='' />
          Benefícios:
        </p>
        <span>1. Brindes exclusivos</span>
        <span>2. Materiais bônus de web</span>
        <p>
          <img src='../../assets/dinheiro.png' alt='' />
          Preço:
        </p>
        <span>{plan?.price} cobrados mensalmente</span>
      </div>
      <div className='infos-register'>
        <form>
          <input
            type='cardName'
            onChange={(e) => setCardName(e.target.value)}
            value={cardName}
            placeholder='Nome impresso no cartão'
            required
          />
          <input
            type='cardNumber'
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
            placeholder='Digito do cartão'
            required
          />
          <div className='card-infos'>
            <input
              type='securityNumber'
              onChange={(e) => setSecurityNumber(e.target.value)}
              value={securityNumber}
              placeholder='Código de segurança'
              required
            />
            <input
              type='expirationDate'
              onChange={(e) => setExpirationDate(e.target.value)}
              value={expirationDate}
              placeholder='Validade'
              required
            />
          </div>
        </form>
      </div>
      <button className='to-sign' onClick={() => setModal(true)}>
        ASSINAR
      </button>

      {modal && (
        <Modal>
          <img
            className='close'
            src='../../assets/close.png'
            alt=''
            onClick={() => setModal(false)}
          />
          <div className='pop-up'>
            <span>
              Tem certeza que deseja assinar o plano {plan?.name} ({plan?.price}
              )?
            </span>
            <div className='button'>
              <button className='cancel' onClick={() => setModal(false)}>
                Não
              </button>
              <button className='confirm' onClick={() => handlePlan()}>
                SIM
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Container>
  );
}

export default Plan;
