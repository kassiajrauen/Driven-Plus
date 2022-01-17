import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [, setUser] = useContext(AuthContext);

  function handleLogin(e) {
    setLoading(true);
    e.preventDefault();

    const promise = axios.post(
      'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login',
      { email: email, password: password }
    );

    setTimeout(() => {
      promise.then((response) => {
        setUser(response.data);
        if (!response.data.membership) {
          navigate('/subscriptions');
        } else {
          navigate('/home');
        }
      });
    }, 1000);

    promise.catch((error) => {
      setLoading(false);
      alert(error.response.data.message);
    });
  }

  return (
    <Container>
      <img src='../../assets/Logo-Driven.png' alt='' />
      <form onSubmit={handleLogin}>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='E-mail'
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Senha'
        />
        <button type='submit'>{loading ? <Loading /> : 'ENTRAR'}</button>
      </form>
      <StyledLink to='/sign-up'>
        <span>Não possuí uma conta? Cadastre-se</span>
      </StyledLink>
    </Container>
  );

  function Loading() {
    return (
      <span color='#FFFFFF' height={50} width={50}>
        Carregando...
      </span>
    );
  }
}

export default Login;
