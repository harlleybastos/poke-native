import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

let width = Dimensions.get('screen').width;

export const PokeDetailsTab = styled.View`
  top: 40px;
  height: 45px;
  border-bottom-color: #ddd;
  width: ${width}px;
  border-bottom-width: 2px;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  position: absolute;
  right: 10px;
`;
