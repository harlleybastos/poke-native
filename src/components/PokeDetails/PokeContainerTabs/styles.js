import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

let width = Dimensions.get('window').width;

export const PokeDetailsTab = styled.View`
  top: 50px;
  height: 60px;
  border-bottom-color: #ddd;
  width: ${width}px;
  border-bottom-width: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
`;
