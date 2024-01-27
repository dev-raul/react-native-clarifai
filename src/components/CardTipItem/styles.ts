import { lighten } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 58px;
  background-color: ${({ theme: { colors } }) => colors.background.primary};
  border-radius: 6px;
  align-items: center;
  padding: 5px 10px;
  flex-direction: row;
`;

export const Percentage = styled.View`
  height: 46px;
  width: 46px;
  padding: 5px;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) =>
    lighten(0.3, colors.shade.primary)};

  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const PercentageText = styled.Text`
  color: ${({ theme: { colors } }) => colors.text.primary};
  font-size: 12px;
  font-weight: 700;
`;

export const Title = styled.Text`
  color: ${({ theme: { colors } }) => colors.text.primary};
  font-size: 16px;
`;
