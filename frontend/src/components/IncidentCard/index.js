import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';

import { StyledIncidentCard } from './styles';

export default function IncidentCard({ incident, handleDelete }) {
  const { colors } = useContext(ThemeContext);

  return (
    <StyledIncidentCard key={incident.id}>
      <strong>CASO:</strong>
      <p>{incident.title}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{incident.description}</p>

      <strong>VALOR:</strong>
      <p>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value)}
      </p>

      <button onClick={() => handleDelete(incident.id)}>
        <FiTrash2 size={20} color={colors.primary} />
      </button>
    </StyledIncidentCard>
  );
}
