import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
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

      <Repositories>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/57861255?s=460&u=fab67d1be099c5eebb9bcd5d51c95bd86070f8b4&v=4" alt="Wolf" />
          <div>
            <strong>bruno-wolf/onlive</strong>
            <p>A website for booking and see online live music concerts</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;