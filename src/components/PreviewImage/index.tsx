import React from 'react';

import * as S from './styles';
import { PreviewImageProps } from './types';

export const PreviewImage: React.FC<PreviewImageProps> = ({ previewUrl }) => {
  return (
    <S.Container>
      {previewUrl ? (
        <S.ImagePreview source={{ uri: previewUrl }} resizeMode="cover" />
      ) : (
        <S.Message>Selecione a foto do seu prato para analizar.</S.Message>
      )}
    </S.Container>
  );
};
