import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ImgBackground,
  TitleText,
  DescriptionText,
  ButtonOk,
  TextOk,
} from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <ImgBackground source={giveClassesBgImage}>
        <TitleText>Quer ser um proffy?</TitleText>
        <DescriptionText>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </DescriptionText>
      </ImgBackground>
      <ButtonOk onPress={handleNavigateBack}>
        <TextOk>Tudo Bem</TextOk>
      </ButtonOk>
    </Container>
  );
}

export default GiveClasses;
