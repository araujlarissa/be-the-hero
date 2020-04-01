import React from 'react';
import { TouchableOpacity, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '~/assets/logo.png';
import ButtonContact from '~/components/ButtonContact';
import {
  Container,
  Header,
  DetailContainer,
  Label,
  Value,
  ContactContainer,
  Title,
  Description,
  ButtonContainer,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>

      <DetailContainer>
        <Label style={{ marginTop: 0 }}>ONG:</Label>
        <Value>
          {incident.name} de {incident.city}/{incident.uf}
        </Value>

        <Label>CASO:</Label>
        <Value>{incident.title}</Value>

        <Label>VALOR:</Label>
        <Value>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Value>
      </DetailContainer>

      <ContactContainer>
        <Title>Salve o dia</Title>
        <Title>Seja o herói desse caso.</Title>

        <Description>Entre em contato!</Description>

        <ButtonContainer>
          <ButtonContact text="Whatsapp" action={sendWhatsapp} />
          <ButtonContact text="E-mail" action={sendMail} />
        </ButtonContainer>
      </ContactContainer>
    </Container>
  );
}
