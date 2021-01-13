import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
let height = Dimensions.get('window').height;
let width = Dimensions.get('screen').width;
let widthWD = Dimensions.get('window').width;

const ContainerButtonsSC = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  bottom: 30px;
`;
const ContainerHeader = styled.View`
  margin: 15px;
  align-items: center;
`;

const ContainerMain = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ContainerSearch = styled.View`
  bottom: 10px;
`;

const PokeBallLoading = styled.Image`
  width: ${width / 2}px;
`;

const ContainerPokeballLoading = styled.View`
  width: ${width / 3}px;
  align-items: flex-start;
  bottom: 250px;
`;
const ContainerPokeballError = styled.View`
  width: ${widthWD}px;
  position: relative;
  align-items: center;
  justify-content: center;
  bottom: 190px;
`;

const TextErrorSearch = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 80px;
`;
const TextErrorSearchTwo = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 120px;
`;

const ContainerSearchBar = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
  bottom: 80px;
`;
const ListOfPokemons = styled.FlatList`
  bottom: 100px;
  margin-bottom: -100px;
  height: ${height}px;
`;
const TouchButtonSearch = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  z-index: 3;
  bottom: 50px;
  width: 150px;
  background-color: rgba(10, 50, 0, 0.2);
  align-items: center;
  justify-content: center;
`;

const TouchButtonClear = styled.TouchableOpacity`
  z-index: 3;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
  bottom: 50px;
  margin-left: 10px;
  background-color: rgba(10, 50, 0, 0.2);
  align-items: center;
  justify-content: center;
`;
const TextButtonClear = styled.Text`
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  font-size: 25px;
`;
const TextButtonSearch = styled.Text`
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  font-size: 25px;
`;
const TextInputSearch = styled.TextInput`
  font-size: 30px;
  font-family: 'Roboto-Medium';
  text-decoration: none;
  width: 330px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export {
  TextErrorSearchTwo,
  TextErrorSearch,
  ContainerPokeballError,
  ContainerHeader,
  ContainerButtonsSC,
  PokeBallLoading,
  ContainerPokeballLoading,
  ContainerSearchBar,
  ContainerSearch,
  ContainerMain,
  TextButtonSearch,
  TouchButtonSearch,
  TextInputSearch,
  ListOfPokemons,
  TouchButtonClear,
  TextButtonClear,
};
