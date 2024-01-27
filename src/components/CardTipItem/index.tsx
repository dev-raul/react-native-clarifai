import React from 'react';

import * as S from './styles';
import { CardTipItemProps } from './types';

export const CardTipItem: React.FC<CardTipItemProps> = ({
  title,
  percentage,
}) => {
  return (
    <S.Container>
      <S.Percentage>
        <S.PercentageText>{Math.round(percentage * 100)}%</S.PercentageText>
      </S.Percentage>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
