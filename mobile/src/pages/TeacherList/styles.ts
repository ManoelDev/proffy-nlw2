import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const Teacherlist = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
}))`
  margin-top: -40px;
`;
export const SearchForm = styled.View`
  margin-bottom: 24px;
`;
export const TextLabel = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins-Regular';
`;
export const FormInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#c1bccc',
}))`
  height: 44px;
  background-color: #fff;
  border-radius: 4px;
  justify-content: center;
  padding: 0 14px;
  margin-top: 4px;
  margin-bottom: 12px;
`;
export const FormInputWeek = styled.View.attrs(() => ({}))`
  height: 44px;
  background-color: #fff;
  border-radius: 4px;
  justify-content: center;
  padding: 0 0 0 10px;
  margin-top: 4px;
  margin-bottom: 12px;
`;
export const ImputGoup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const InputBlock = styled.View`
  width: 48%;
`;

export const HeaderButton = styled(BorderlessButton)``;

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  flex-direction: row;
  height: 44px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
export const SubmintButtonText = styled.Text`
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 16px;
`;
export const FilterIcon = styled(Icon)`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
