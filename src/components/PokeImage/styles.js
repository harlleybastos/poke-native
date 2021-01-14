import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const widthDiv = Dimensions.get('window').width / 4;
const width = Dimensions.get('window').width;
const heightDiv = Dimensions.get('window').height / 4;
const height = Dimensions.get('window').height;

const PokeImage = styled.Image`
  width: ${widthDiv}px;
  top: 10px;
  height: ${heightDiv}px;
`;

const PokeImageDiv = styled.View`
  width: 85%;
  height: 55%;
  align-items: center;
  justify-content: center;
  top: 25px;
  left: 60px;
  border-radius: 80px;
  margin-right: 5px;
`;
const PokeImageDivSingle = styled.View`
  width: 85%;
  height: 55%;
  align-items: center;
  justify-content: center;
  top: 25px;
  left: 60px;
  border-radius: 80px;
  margin-right: 5px;
`;

const PokeInfo = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 30px;
  height: 80%;
  margin-right: 20px;
  border-radius: 30px;
`;

const PokeInfoSingle = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 10px;
  height: 80%;
  right: 20px;
  margin-right: 20px;
  border-radius: 30px;
`;

const PokeImageHeader = styled.Image`
  width: ${width / 1.6}px;
  height: ${height / 1.6}px;
  bottom: 110px;
`;

export {
  PokeImageHeader,
  PokeInfo,
  PokeImageDiv,
  PokeImage,
  PokeImageDivSingle,
  PokeInfoSingle,
};
