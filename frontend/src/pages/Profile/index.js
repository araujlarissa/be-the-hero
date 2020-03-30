import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Header } from './styles';

import IncidentCard from '../../components/IncidentCard';

const Profile = () => {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const { logo, colors } = useContext(ThemeContext);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api
      .get('/profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.removeItem('ongId');
    localStorage.removeItem('ongName');

    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Be The Hero" />
        <span>
          Bem vinda, <strong>{ongName}</strong>
        </span>

        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color={colors.primary} />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <IncidentCard
            incident={incident}
            handleDelete={handleDeleteIncident}
          />
        ))}
      </ul>
    </Container>
  );
};

export default Profile;
