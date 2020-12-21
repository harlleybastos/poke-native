import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const widthDiv = Dimensions.get('window').width / 4;
const width = Dimensions.get('window').width;
const heightDiv = Dimensions.get('window').height / 4;

export const PokeImage = styled.Image`
  width: ${widthDiv}px;
  height: ${heightDiv}px;
`;

export const PokeImageDiv = styled.View`
  width: 80%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  top: 60px;
  left: 30px;
  border-radius: 60px;
`;

export const PokeInfo = styled.View`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  border-radius: 30px;
`;

export const PokeImageHeader = styled.Image`
  width: ${width}px;
`;
