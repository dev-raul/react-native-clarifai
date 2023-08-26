import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({theme: {colors}}) => colors.shade.primary};
  padding: 10px;
  justify-content: center;
  align-items: center;
  height: 54px;
`;

export const Title = styled.Text`
  padding: 0px 5px;
  font-size: 16px;
  color: ${({theme: {colors}}) => colors.text.secundary};
`;
