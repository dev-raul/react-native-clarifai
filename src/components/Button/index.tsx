import React from 'react';

import * as S from './styles';
import { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = ({
  title,
  prefix,
  sufix,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {prefix}
      <S.Title>{title}</S.Title>
      {sufix}
    </S.Container>
  );
};
