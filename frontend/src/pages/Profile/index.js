import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ThemeContext } from 'styled-components';
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
      toast.error('Erro ao deletar caso, tente novamente.');
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

      {incidents.length > 0 ? <h1>Casos cadastrados</h1> : null}
      <ul>
        {incidents.length > 0 ? (
          incidents.map((incident) => (
            <IncidentCard
              incident={incident}
              handleDelete={handleDeleteIncident}
            />
          ))
        ) : (
          <h1>Não há casos cadastrados.</h1>
        )}
      </ul>
    </Container>
  );
};

export default Profile;
