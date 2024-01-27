import React from 'react';
import { ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { PreviewImage } from '../../components/PreviewImage';
import { Button } from '../../components/Button';
import { CardTipItem } from '../../components/CardTipItem';
import { ContentLoading } from '../../components/ContentLoading';

import { useTheme } from 'styled-components';
import { useHome } from '../../hooks/home';

import * as S from './styles';
export const Home: React.FC = () => {
  const { colors } = useTheme();
  const { selectedImage, listFoods, isLoading, getImage } = useHome();

  const isTipVegetale = React.useMemo(
    () => listFoods.some((item) => item?.name === 'vegetable'),
    [listFoods],
  );
  const shouldRenderTip = listFoods.length > 0 && !isTipVegetale;

  return (
    <S.Container>
      <S.ButtonCamera onPress={getImage} disabled={isLoading}>
        <FontAwesome name="camera" size={20} color={colors?.text.secundary} />
      </S.ButtonCamera>
      <PreviewImage previewUrl={selectedImage?.uri} />
      <S.InfoContainer>
        <ContentLoading loading={isLoading}>
          {shouldRenderTip && (
            <Button
              activeOpacity={1}
              prefix={
                <FontAwesome
                  name="hands-helping"
                  size={18}
                  color={colors.text.secundary}
                />
              }
              title="Adicionar vegetais no seu prato"
            />
          )}
          <ScrollView showsVerticalScrollIndicator={false}>
            <S.InfoItems>
              {listFoods.map((item) => (
                <CardTipItem
                  key={item?.id}
                  percentage={item?.value}
                  title={item?.name}
                />
              ))}
            </S.InfoItems>
          </ScrollView>
        </ContentLoading>
      </S.InfoContainer>
    </S.Container>
  );
};
