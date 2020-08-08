import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  ProfileName,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavortiteButton,
  UnFavortiteButton,
  ContacButton,
  ContacText,
  ButtonIcon,
  FavoriteIcon,
  UnFavoriteIcon,
} from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { Linking } from 'react-native';
import api from '../../services/api';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  whatsapp: string;
  subject: string;
  cost: number;
}

export interface TeacherItemProps {
  teacher: Teacher;
  favorited?: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  function hancleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    const favoritesArray = JSON.parse(favorites);

    if (favorites) {
    }

    if (isFavorited) {
      const favoritesIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => {
          return teacherItem.id === teacher.id;
        },
      );

      favoritesArray.splice(favoritesIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />
        <ProfileInfo>
          <ProfileName>{teacher.name}</ProfileName>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>
      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>
        <ButtonsContainer>
          {isFavorited ? (
            <UnFavortiteButton onPress={handleToggleFavorite}>
              <UnFavoriteIcon source={unFavoriteIcon} />
            </UnFavortiteButton>
          ) : (
            <FavortiteButton onPress={handleToggleFavorite}>
              <FavoriteIcon source={heartOutlineIcon} />
            </FavortiteButton>
          )}

          <ContacButton onPress={hancleLinkToWhatsapp}>
            <ButtonIcon source={whatsappIcon} />
            <ContacText>Entrar em contato</ContacText>
          </ContacButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
