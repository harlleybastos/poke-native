import styled from 'styled-components/native';

const ContainerBaseStats = styled.View`
  flex: 1;
  top: 120px;
  left: 50px;
  align-items: flex-start;
  padding: 15px;
`;

const ContainerTextBaseStats = styled.View`
  align-content: center;
  justify-content: center;
`;

const FirstTextBS = styled.Text`
  text-transform: uppercase;
  font-size: 23px;
  color: #545353;
  position: relative;
  font-family: 'Roboto-Medium';
`;

const SecondTextBS = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 23px;
  margin-left: 250px;
  color: #000;
  position: absolute;
  text-transform: capitalize;
`;
export {ContainerTextBaseStats, FirstTextBS, SecondTextBS, ContainerBaseStats};
