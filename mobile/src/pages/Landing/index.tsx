import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import studyIcon from '../../assets/images/icons/study.png';
import giveIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  Image,
  WellcomeText,
  WellcomeTextBold,
  ButtonsContainer,
  ButtonPrimary,
  TextButtonPrimary,
  ButtonIcon,
  ButtonSecondary,
  TextButtonSecondary,
  TotalConnetions,
  TotalIcon,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import api from '../../services/api';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [toralConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  function hadleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }
  function handleNavigateToStudy() {
    navigate('Study');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8257e5" />
      <Container>
        <Image source={landingImg} />
        <WellcomeText>
          Seja bem-vindo, {'\n'}
          <WellcomeTextBold>O que deseja fazer.</WellcomeTextBold>
        </WellcomeText>
        <ButtonsContainer>
          <ButtonPrimary onPress={handleNavigateToStudy}>
            <ButtonIcon source={studyIcon} />
            <TextButtonPrimary>Estudar</TextButtonPrimary>
          </ButtonPrimary>

          <ButtonSecondary onPress={hadleNavigateToGiveClassesPage}>
            <ButtonIcon source={giveIcon} />
            <TextButtonSecondary>Dar Aulas</TextButtonSecondary>
          </ButtonSecondary>
        </ButtonsContainer>
        <TotalConnetions>
          Total de {toralConnections} conexões já realizadas{' '}
          <TotalIcon source={heartIcon} />
        </TotalConnetions>
      </Container>
    </>
  );
};

export default Landing;
