import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

let {width} = Dimensions.get('window');

export const PokeDetailsTab = styled.View`
  top: 50px;
  height: 50px;
  border-bottom-color: #ddd;
  width: ${width}px;
  border-bottom-width: 1px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
