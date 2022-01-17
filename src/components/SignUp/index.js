import axios from 'axios';
import React, { useState } from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('false');

  const navigate = useNavigate();

  function handleSignUp(e) {
    setLoading(true);
    e.preventDefault();

    const promise = axios.post(
      'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up',
      { email: email, name: name, cpf: cpf, password: password }
    );
    setTimeout(() => {
      promise.then(() => {
        navigate('/');
      });
    }, 1000);
    promise.catch((error) => {
      setLoading(false);
      alert(error.response.data.message);
    });
  }

  return (
    <Container>
      <form onSubmit={handleSignUp}>
        <input
          type='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Nome'
          required
        />
        <input
          type='cpf'
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          placeholder='CPF'
          required
        />
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='E-mail'
          required
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Senha'
          required
        />
        <button type='submit'>{!loading ? <Loading /> : 'CADASTRAR'}</button>
      </form>
      <StyledLink to='/'>
        <span>Já possuí uma conta? Entre</span>
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

export default SignUp;
