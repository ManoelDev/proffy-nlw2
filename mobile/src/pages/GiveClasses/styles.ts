import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const ImgBackground = styled.ImageBackground.attrs(() => ({
  resizeMode: 'contain',
}))`
  flex: 1;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-family: 'Achivo-SemiBold';
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const DescriptionText = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins-Regular';
  max-width: 240px;
`;

export const ButtonOk = styled(RectButton)`
  margin: 40px 0;
  background-color: #04d361;
  height: 58px;
  align-content: center;
  justify-content: center;
  border-radius: 8px;
`;
export const TextOk = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Archivo-Bold';

  align-self: center;
`;
