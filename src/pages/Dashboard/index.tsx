import React from 'react';
import { Title, Form } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub explorer" />
      <Title>Explore Repositórios no GitHub</Title>

      <Form action="">
        <input type="text" placeholder="Escreva o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
}

export default Dashboard;