import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('screen').width / 2.5;
const height = Dimensions.get('screen').height / 4;

export const PokeContainer = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: #116f6a;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 15px;
`;

export const PokeName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 22px;
  bottom: 100px;
  right: 15px;
  text-transform: capitalize;
`;

export const PokeContainerType = styled.View`
  background-color: #bd4242;
  margin: 10px;
  right: 37%;
  bottom: 40%;
  min-width: 50px;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const PokeType = styled.Text`
  justify-content: space-evenly;
  text-transform: capitalize;
  color: #fff;
`;

export const PokeNumber = styled.Text`
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  align-content: flex-end;
  flex-direction: row;
  top: 40px;
  left: 55px;
  font-size: 20px;
`;
