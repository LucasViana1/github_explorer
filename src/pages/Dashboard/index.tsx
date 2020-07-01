import React from 'react';

import logoImage from '../../assets/logo.svg';
import { Title, Form } from './styles';

const Dashboard = () => {
  return (
    <>
      <img src={logoImage} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
