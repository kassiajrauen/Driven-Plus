import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import { PlanContext } from '../../contexts/PlanContext';
import { AuthContext } from '../../contexts/AuthContext';

function Header() {
  const [user] = useContext(AuthContext);
  const [id] = useContext(PlanContext);
  const [plan, setPlan] = useState();

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

  return (
    <Container>
      <img className='logo-plano' src={plan?.image} alt='' />
      <img
        className='icone-people'
        src='../../assets/icone-people.png'
        alt=''
      />
    </Container>
  );
}
export default Header;
