import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const Image = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 100%;
`;

export const WellcomeText = styled.Text`
  font-family: 'Poppins-Regular';
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;
export const WellcomeTextBold = styled.Text`
  font-weight: 600;
  font-weight: bold;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;
export const ButtonPrimary = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #9871f5;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonIcon = styled.Image``;

export const TextButtonPrimary = styled.Text`
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 20px;
`;

export const ButtonSecondary = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #04d361;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;
export const TextButtonSecondary = styled.Text`
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 20px;
`;

export const TotalConnetions = styled.Text`
  font-family: 'Poppins-Regular';
  color: #d4c2ff;
  font-size: 16px;
  line-height: 20px;
  max-width: 90%;
  margin-top: 40px;
`;
export const TotalIcon = styled.Image``;
