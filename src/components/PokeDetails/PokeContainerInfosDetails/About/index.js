import React from 'react';
import * as AboutStyles from './styles';

const About = ({types, height, weight, abilities}) => {
  return (
    <AboutStyles.ContainerAbout>
      <AboutStyles.ContainerText>
        <AboutStyles.FirstText>Type</AboutStyles.FirstText>
        <AboutStyles.SecondText>{types}</AboutStyles.SecondText>
      </AboutStyles.ContainerText>
      <AboutStyles.ContainerText>
        <AboutStyles.FirstText>Height</AboutStyles.FirstText>
        <AboutStyles.SecondText style={{textTransform: 'none'}}>
          {height}cm
        </AboutStyles.SecondText>
      </AboutStyles.ContainerText>
      <AboutStyles.ContainerText>
        <AboutStyles.FirstText>Weight</AboutStyles.FirstText>
        <AboutStyles.SecondText>{weight}</AboutStyles.SecondText>
      </AboutStyles.ContainerText>
      <AboutStyles.ContainerText>
        <AboutStyles.FirstText>Habilities</AboutStyles.FirstText>
      </AboutStyles.ContainerText>
      <AboutStyles.SecondText style={{top: 140, left: 10}}>
        {abilities}
      </AboutStyles.SecondText>
    </AboutStyles.ContainerAbout>
  );
};

export default About;
