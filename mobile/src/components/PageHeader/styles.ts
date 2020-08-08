import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 40px;
  background-color: #8257e5;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(BorderlessButton)``;

export const Image = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))``;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  margin: 40px 0;
`;
