import {styled} from 'styled-components/native';
import {STATU_BAR_HEIGHT} from '../../utils/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme: {colors}}) => colors.background.primary};
  padding-top: ${STATU_BAR_HEIGHT}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 20px;
  margin-top: 5px;
`;

export const ButtonCamera = styled.TouchableOpacity`
  background-color: ${({theme: {colors}}) => colors.shade.primary};
  border-radius: 8px;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({theme: {colors}}) => colors.background.secundary};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  padding: 30px 20px 20px;
`;

export const InfoItems = styled.View`
  flex: 1;
  gap: 12px;
  margin-top: 12px;
`;
