import { styled } from 'styled-components/native';
import { STATU_BAR_HEIGHT } from '../../utils/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background.primary};
`;

export const ButtonCamera = styled.TouchableOpacity`
  background-color: ${({ theme: { colors } }) => colors.shade.primary};
  border-radius: 8px;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  top: ${STATU_BAR_HEIGHT}px;
  right: 20px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.background.secundary};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  padding: 30px 20px 20px;
  transform: translateY(-45px);
`;

export const InfoItems = styled.View`
  flex: 1;
  gap: 12px;
  margin-top: 12px;
`;
