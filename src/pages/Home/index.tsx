import React from 'react';
import { ScrollView } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { PreviewImage } from '../../components/PreviewImage';
import { Button } from '../../components/Button';
import { CardTipItem } from '../../components/CardTipItem';

import { useTheme } from 'styled-components';
import { useHome } from '../../hooks/home';

import * as S from './styles';
export const Home: React.FC = () => {
  const { colors } = useTheme();
  const { selectedImage, getImage } = useHome();

  const previewUrl = selectedImage?.base64
    ? `data:${selectedImage?.type};base64,${selectedImage?.base64}`
    : undefined;

  return (
    <S.Container>
      <S.ButtonCamera onPress={getImage}>
        <FontAwesome name="camera" size={20} color={colors?.text.secundary} />
      </S.ButtonCamera>
      <PreviewImage previewUrl={previewUrl} />
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
