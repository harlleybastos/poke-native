import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('screen').width / 2;
const height = Dimensions.get('screen').height / 4;

export const PokeContainer = styled.View`
  width: ${width};
  height: ${height};
  border-color: black;
  border-width: 3px;
  align-items: center;
  padding: 10px;
`;
