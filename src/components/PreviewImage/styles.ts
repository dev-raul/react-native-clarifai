import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${Dimensions.get('screen').height * 0.5}px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.shade.primary};
`;

export const ImagePreview = styled.Image`
  width: 100%;
  height: 100%;
`;
