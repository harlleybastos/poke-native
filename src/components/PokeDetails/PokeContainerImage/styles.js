import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const PokeballBehindDetails = styled.Image`
  position: absolute;
  opacity: 0.4;
  width: 400px;
  height: 400px;
  top: 50px;
  left: 100px;
`;

export const PokeContainerImage = styled.View`
  align-items: center;
  bottom: 75px;
  width: ${width}px;
  height: ${height / 3.5}px;
  justify-content: center;
  z-index: 5;
`;

export const PokeImage = styled.Image`
  right: 30px;
  min-width: ${width / 1.6}px;
  min-height: ${height / 1.6}px;
`;
