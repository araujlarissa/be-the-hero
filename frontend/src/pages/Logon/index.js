import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Section, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import heroesImg from '../../assets/heroes.png';

const Logon = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  const { logo, colors } = useContext(ThemeContext);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <Section>
        <img src={logo} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <Input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/register">
          <FiLogIn size={16} color={colors.primary} />
          Não tenho cadastro
        </Link>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
};

export default Logon;
