import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content, Section, Form } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import BackLink from '../../components/BackLink';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const { logo, colors } = useContext(ThemeContext);

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontraem
            os casos da sua ONG.
          </p>

          <BackLink to="/">
            <FiArrowLeft size={16} color={colors.primary} />
            Já tenho cadastro
          </BackLink>
        </Section>

        <Form onSubmit={handleRegister}>
          <Input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div>
            <Input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
