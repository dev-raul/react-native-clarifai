import React from 'react';

import {useTheme} from 'styled-components';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import * as S from './styles';
import {PreviewImage} from '../../components/PreviewImage';
import {Button} from '../../components/Button';
import {CardTipItem} from '../../components/CardTipItem';
import {ScrollView} from 'react-native';

export const Home: React.FC = () => {
  const {colors} = useTheme();

  return (
    <S.Container>
      <S.Header>
        <S.ButtonCamera>
          <FontAwesome name="camera" size={20} color={colors?.text.secundary} />
        </S.ButtonCamera>
      </S.Header>
      <PreviewImage />
      <S.InfoContainer>
        <Button
          prefix={
            <FontAwesome
              name="hands-helping"
              size={18}
              color={colors.text.secundary}
            />
          }
          title="Aqui vai uma dica"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.InfoItems>
            <CardTipItem percentage={40} title="Title" />
          </S.InfoItems>
        </ScrollView>
      </S.InfoContainer>
    </S.Container>
  );
};
