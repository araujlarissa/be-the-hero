import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content, Section, Form } from './styles';

import { Input, TextArea } from '../../components/Input';
import { Button } from '../../components/Button';

const NewIncident = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  const { logo, colors } = useContext(ThemeContext);

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color={colors.primary} />
            Voltar para home
          </Link>
        </Section>

        <Form onSubmit={handleNewIncident}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewIncident;
