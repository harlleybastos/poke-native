import styled from 'styled-components/native';

const ContainerAbout = styled.View`
  flex: 1;
  top: 135px;
  align-items: flex-start;
  padding: 15px;
  left: 30px;
  top: 120px;
`;
const ContainerText = styled.View`
  align-content: center;
  justify-content: center;
`;

const FirstText = styled.Text`
  padding-bottom: 10px;
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
  font-size: 23px;
  color: #545353;
  position: relative;
`;

const SecondText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 23px;
  color: #000;
  bottom: 10px;
  padding-left: 170px;
  position: absolute;
  text-transform: uppercase;
`;

export {FirstText, SecondText, ContainerText, ContainerAbout};
