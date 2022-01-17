import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { DataCardContext } from '../../contexts/DataCardContext';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const [loading, setLoading] = useState(false);

  const [user] = useContext(AuthContext);
  const [dataCard] = useContext(DataCardContext);

  const navigate = useNavigate();

  function changePlan() {
    const promise = axios.post(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,
      dataCard,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setTimeout(() => {
      promise.then((response) => {
        navigate('/subscriptions');
      });
    }, 1000);
    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

  function cancel() {
    setLoading(true);

    const promise = axios.delete(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    setTimeout(() => {
      promise.then(() => {
        navigate('/subscriptions');
      });
    }, 1000);

    promise.catch((error) => {
      setLoading(false);
      alert(error.response.data.message);
    });
  }

  return (
    <Container>
      <button onClick={() => changePlan()}>Mudar plano</button>
      <button className='cancel' onClick={() => cancel()}>
        {loading ? <Loading /> : 'Cancelar plano'}
      </button>
    </Container>
  );

  function Loading() {
    return (
      <span color='#FFFFFF' height={50} width={50}>
        Cancelando...
      </span>
    );
  }
}

export default Footer;
