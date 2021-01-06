import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width / 1.2;
const ContainerDescription = styled.View`
  flex: 1;
  align-content: center;
  left: 35px;
  width: ${width}px;
  flex-wrap: nowrap;
`;
const Description = styled.Text`
  font-family: 'Roboto-Light';
  top: 140px;
  font-size: 30px;
`;

export {ContainerDescription, Description};
