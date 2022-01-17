import React, { useContext } from 'react';
import { Container } from './styles';
import Header from '../Header';
import Footer from '../Footer';
import { DataPlanContext } from '../../contexts/DataPlanContext';

function Home() {
  const [dataPlan] = useContext(DataPlanContext);

  console.log(dataPlan);
  console.log(dataPlan.membership);
  return (
    <Container>
      <Header></Header>
      <h1>Olá, fulano</h1>
      {dataPlan?.membership?.perks?.map((button) => (
        <a href={button.link}>
          <button>{button.title}</button>
        </a>
      ))}
      <Footer />
    </Container>
  );
}

export default Home;
