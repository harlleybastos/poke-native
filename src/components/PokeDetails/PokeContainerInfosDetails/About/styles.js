import styled from 'styled-components/native';

const ContainerAbout = styled.View`
  flex: 1;
  top: 110px;
  align-items: flex-start;
  padding: 20px;
`;
const ContainerText = styled.View`
  padding-bottom: 10px;
`;

const FirstText = styled.Text`
  font-size: 20px;
  color: #ccc;
  position: relative;
`;

const SecondText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #000;
  position: absolute;
  padding-left: 30%;
  text-transform: capitalize;
`;

export {FirstText, SecondText, ContainerText, ContainerAbout};
