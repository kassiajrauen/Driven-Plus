import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { PlanContext } from '../../contexts/PlanContext';
import { useNavigate } from 'react-router-dom';

function Subscriptions() {
  const [plans, setPlans] = useState();
  const [user] = useContext(AuthContext);
  const [, setPlan] = useContext(PlanContext);

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships',
      { headers: { Authorization: `Bearer ${user.token}` } }
    );
    promise
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, [user.token]);

  return (
    <Container>
      <h1>Escolha seu Plano</h1>
      {plans?.map((plan) => (
        <div
          id={plan.id}
          onClick={() => {
            setPlan(plan.id);
            navigate(`/plan`);
          }}
        >
          <img className='logo-plano' src={plan.image} alt='' />
          <span>{plan.price}</span>
        </div>
      ))}
    </Container>
  );
}

export default Subscriptions;
