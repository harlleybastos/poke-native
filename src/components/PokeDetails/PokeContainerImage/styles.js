import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const PokeContainerImage = styled.View`
  align-items: center;
  bottom: 30px;
  width: ${width}px;
  height: ${height / 3.5}px;
  justify-content: center;
  z-index: 5;
`;

export const PokeImage = styled.Image`
  min-width: ${width / 1.7}px;
  min-height: ${height / 1.7}px;
`;
