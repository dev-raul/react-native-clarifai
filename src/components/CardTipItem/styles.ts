import {lighten} from 'polished';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 54px;
  background-color: ${({theme: {colors}}) => colors.background.primary};
  border-radius: 4px;
  align-items: center;
  padding: 5px 10px;
  flex-direction: row;
`;

export const Percentage = styled.View`
  height: 44px;
  width: 44px;
  border-radius: 4px;
  background-color: ${({theme: {colors}}) =>
    lighten(0.3, colors.shade.primary)};

  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const PercentageText = styled.Text`
  color: ${({theme: {colors}}) => colors.text.primary};
  font-size: 14px;
  font-weight: 700;
`;

export const Title = styled.Text`
  color: ${({theme: {colors}}) => colors.text.primary};
  font-size: 16px;
`;
