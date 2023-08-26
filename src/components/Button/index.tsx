import React from 'react';

import * as S from './styles';
import {ButtonProps} from './types';

export const Button: React.FC<ButtonProps> = ({title, prefix, sufix}) => {
  return (
    <S.Container>
      {prefix}
      <S.Title>{title}</S.Title>
      {sufix}
    </S.Container>
  );
};
