import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker';

import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import {
  Container,
  Teacherlist,
  SearchForm,
  TextLabel,
  ImputGoup,
  InputBlock,
  HeaderButton,
  SubmitButton,
  SubmintButtonText,
  FormInputWeek,
  FilterIcon,
} from './styles';

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersId = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          },
        );
        setFavorites(favoritedTeachersId);
      }
    });
  }

  function handelToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  async function hadleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: { subject, week_day, time },
    });
    setTeachers(response.data);
    setIsFiltersVisible(false);
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <HeaderButton onPress={handelToggleFiltersVisible}>
            <FilterIcon name="filter" size={20} color="#fff" />
          </HeaderButton>
        }>
        {isFiltersVisible && (
          <SearchForm>
            <TextLabel>Matéria</TextLabel>
            <FormInputWeek>
              <Picker
                selectedValue={subject}
                onValueChange={(value) => setSubject(value)}>
                <Picker.Item label="Selecione a Materia" value="null" />
                <Picker.Item label="Artes" value="Artes" />
                <Picker.Item label="Biologia" value="Biologia" />
                <Picker.Item label="Ciencias" value="Ciencias" />
                <Picker.Item label="Educação fisica" value="Educação fisica" />
                <Picker.Item label="Geografia" value="Geografia" />
                <Picker.Item label="Historia" value="Historia" />
                <Picker.Item label="Matematica" value="Matematica" />
                <Picker.Item label="Portugues" value="Portugues" />
                <Picker.Item label="Quimica" value="Quimica" />
              </Picker>
            </FormInputWeek>
            <ImputGoup>
              <InputBlock>
                <TextLabel>Dia da semana</TextLabel>
                <FormInputWeek>
                  <Picker
                    selectedValue={week_day}
                    onValueChange={(value) => setWeek_day(value)}>
                    <Picker.Item label="Dia" value="null" />
                    <Picker.Item label="Domingo" value="0" />
                    <Picker.Item label="Segunda-feira" value="1" />
                    <Picker.Item label="Terça-feira" value="2" />
                    <Picker.Item label="Quarta-feira" value="3" />
                    <Picker.Item label="Quinta-feira" value="4" />
                    <Picker.Item label="Sexta-feira" value="5" />
                    <Picker.Item label="Sabádo" value="6" />
                  </Picker>
                </FormInputWeek>
              </InputBlock>
              <InputBlock>
                <TextLabel>Horário</TextLabel>

                <FormInputWeek>
                  <Picker
                    selectedValue={time}
                    onValueChange={(value) => setTime(value)}>
                    <Picker.Item label="Hora" value="null" />
                    <Picker.Item label=" as 00:00 horas" value="00:00" />
                    <Picker.Item label=" as 01:00 horas" value="01:00" />
                    <Picker.Item label=" as 02:00 horas" value="02:00" />
                    <Picker.Item label=" as 03:00 horas" value="03:00" />
                    <Picker.Item label=" as 04:00 horas" value="04:00" />
                    <Picker.Item label=" as 05:00 horas" value="05:00" />
                    <Picker.Item label=" as 06:00 horas" value="06:00" />
                    <Picker.Item label=" as 07:00 horas" value="07:00" />
                    <Picker.Item label=" as 08:00 horas" value="08:00" />
                    <Picker.Item label=" as 09:00 horas" value="09:00" />
                    <Picker.Item label=" as 10:00 horas" value="10:00" />
                    <Picker.Item label=" as 11:00 horas" value="11:00" />
                    <Picker.Item label=" as 12:00 horas" value="12:00" />
                    <Picker.Item label=" as 13:00 horas" value="13:00" />
                    <Picker.Item label=" as 14:00 horas" value="14:00" />
                    <Picker.Item label=" as 15:00 horas" value="15:00" />
                    <Picker.Item label=" as 16:00 horas" value="16:00" />
                    <Picker.Item label=" as 17:00 horas" value="17:00" />
                    <Picker.Item label=" as 18:00 horas" value="18:00" />
                    <Picker.Item label=" as 19:00 horas" value="19:00" />
                    <Picker.Item label=" as 20:00 horas" value="20:00" />
                    <Picker.Item label=" as 21:00 horas" value="21:00" />
                    <Picker.Item label=" as 22:22 horas" value="22:22" />
                    <Picker.Item label=" as 23:00 horas" value="23:00" />
                  </Picker>
                </FormInputWeek>
              </InputBlock>
            </ImputGoup>
            <SubmitButton onPress={hadleFiltersSubmit}>
              <SubmintButtonText>Filtrar</SubmintButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <Teacherlist>
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </Teacherlist>
    </Container>
  );
}
export default TeacherList;
