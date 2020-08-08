import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import LogoImg from '../../assets/images/logo.png';

import {
  Container,
  TopBar,
  Button,
  Image,
  Logo,
  Title,
  Header,
} from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate('Landing');
  }
  return (
    <Container>
      <TopBar>
        <Button onPress={handleGoBack}>
          <Image source={backIcon} />
        </Button>
        <Logo source={LogoImg} />
      </TopBar>
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>
      {children}
    </Container>
  );
};

export default PageHeader;
