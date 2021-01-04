import React from 'react';
import {ContainerAbout, ContainerText, FirstText, SecondText} from '../styles';

const About = ({types, height, weight, abilities}) => {
  return (
    <ContainerAbout>
      <ContainerText>
        <FirstText>Type</FirstText>
        <SecondText>{types}</SecondText>
      </ContainerText>
      <ContainerText>
        <FirstText>Height</FirstText>
        <SecondText style={{textTransform: 'none'}}>{height}cm</SecondText>
      </ContainerText>
      <ContainerText>
        <FirstText>Weight</FirstText>
        <SecondText>{weight}</SecondText>
      </ContainerText>
      <ContainerText>
        <FirstText>Habilities</FirstText>
      </ContainerText>
      <SecondText style={{top: 140, left: 10}}>{abilities}</SecondText>
    </ContainerAbout>
  );
};

export default About;
