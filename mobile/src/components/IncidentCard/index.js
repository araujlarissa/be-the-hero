/* eslint-disable no-shadow */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { Container, Label, Value, DetailsButton, TextButton } from './styles';

export default function IncidentCard({ incident }) {
  const navigation = useNavigation();

  const navigateToDetail = (incident) => {
    navigation.navigate('Detail', { incident });
  };

  return (
    <Container>
      <Label>ONG:</Label>
      <Value>{incident.name}</Value>

      <Label>CASO:</Label>
      <Value>{incident.title}</Value>

      <Label>VALOR:</Label>
      <Value>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value)}
      </Value>

      <DetailsButton onPress={() => navigateToDetail(incident)}>
        <TextButton>Ver mais detalhes</TextButton>
        <Feather name="arrow-right" size={16} color="#E02041" />
      </DetailsButton>
    </Container>
  );
}
