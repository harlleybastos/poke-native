import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const PokeContainerDetails = styled.View`
  background-color: #fff;
  height: ${height}px;
  width: ${width}px;
  border-radius: 40px;
  bottom: 75px;
`;
