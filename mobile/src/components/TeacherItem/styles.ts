import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;
export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;
export const ProfileInfo = styled.View`
  margin-left: 16px;
`;
export const ProfileName = styled.Text`
  font-family: 'Archivo-Bold';
  color: #32264d;
  font-size: 20px;
`;
export const Subject = styled.Text`
  font-family: 'Poppins-Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;
export const Bio = styled.Text`
  margin: 0 24px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;
export const Footer = styled.View`
  background-color: #fafafc;
  border-top-width: 1px;
  border-top-color: #e6e6f0;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;
export const Price = styled.Text`
  font-family: 'Poppins-Regular';
  color: #6a6180;
  font-size: 14px;
`;
export const PriceValue = styled.Text`
  font-family: 'Archivo-Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;
export const FavortiteButton = styled(RectButton)`
  background-color: #8257e5;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
export const UnFavortiteButton = styled(RectButton)`
  background-color: #e33d3d;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
export const ContacButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
export const ContacText = styled.Text`
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
export const FavoriteIcon = styled.Image``;
export const UnFavoriteIcon = styled.Image``;
export const ButtonIcon = styled.Image``;
