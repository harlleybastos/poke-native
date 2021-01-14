import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('screen').width / 2.5;
const widthOrig = Dimensions.get('window').width;
const heightOrig = Dimensions.get('window').height;
const height = Dimensions.get('window').height / 2.5;
const widthMin = Dimensions.get('screen').width / 3.9;
const heightMin = Dimensions.get('window').height / 3.9;
const widthDf = Dimensions.get('screen').width;

const ContainerEvolutionsMain = styled.View`
  width: ${widthDf}px;
  bottom: 10px;
`;
const ContainerEvolutions = styled.View`
  flex: 1;
  width: ${widthOrig}px;
  left: 50px;
  top: 120px;
  justify-content: center;
`;
const ContainerEvolutionsTwo = styled.View`
  flex: 1;
  top: 120px;
  left: 55px;
  align-items: flex-start;
  padding: 10px;
`;

const ContainerEvolutionsDetails = styled.View`
  flex: 1;
`;

const FirstImagePoke = styled.Image`
  width: ${widthMin}px;
  height: ${heightMin}px;
  bottom: 20px;
  right: 30px;
`;
const SecondImagePoke = styled.Image`
  width: ${widthMin}px;
  height: ${heightMin}px;
  left: 95px;
  top: 90px;
`;

const ThirdImagePoke = styled.Image`
  width: ${widthMin}px;
  height: ${heightMin}px;
  left: 210px;
  bottom: 15px;
`;
const ContainerTextEvolutions = styled.View`
  align-content: center;
  justify-content: center;
`;

const FirstTextEV = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  color: #000;
  right: 35px;
  font-family: 'Roboto-Medium';
`;

const OtherFirstTextEV = styled.Text`
  text-transform: uppercase;
  font-size: 30px;
  color: #000;
  right: 40px;
  font-family: 'Roboto-Medium';
`;

const SecondTextEV = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  left: 75px;
  top: 115px;
  color: #000;
  text-transform: uppercase;
`;

const OtherFirstImagePoke = styled.Image`
  width: ${width}px;
  height: ${height}px;
  right: 55px;
  bottom: 20px;
`;
const OtherSecondTextEV = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 30px;
  left: 170px;
  color: #000;
  text-transform: uppercase;
`;

const OtherSecondImagePoke = styled.Image`
  width: ${width}px;
  height: ${height}px;
  left: 170px;
  bottom: 20px;
`;

const ThirdTextEV = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  margin-left: 210px;
  color: #000;
  font-family: 'Roboto-Medium';
`;

export {
  ContainerEvolutionsMain,
  ContainerEvolutionsTwo,
  ThirdImagePoke,
  SecondImagePoke,
  FirstImagePoke,
  OtherSecondImagePoke,
  ContainerEvolutionsDetails,
  OtherFirstImagePoke,
  OtherFirstTextEV,
  OtherSecondTextEV,
  ThirdTextEV,
  ContainerEvolutions,
  ContainerTextEvolutions,
  FirstTextEV,
  SecondTextEV,
};
