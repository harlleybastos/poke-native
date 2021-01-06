import React from 'react';
import * as styles from './styles';

const About = ({types, height, weight, abilities}) => {
  return (
    <styles.ContainerAbout>
      <styles.ContainerText>
        <styles.FirstText>Type</styles.FirstText>
        <styles.SecondText>{types}</styles.SecondText>
      </styles.ContainerText>
      <styles.ContainerText>
        <styles.FirstText>Height</styles.FirstText>
        <styles.SecondText style={{textTransform: 'none'}}>
          {height}cm
        </styles.SecondText>
      </styles.ContainerText>
      <styles.ContainerText>
        <styles.FirstText>Weight</styles.FirstText>
        <styles.SecondText>{weight}</styles.SecondText>
      </styles.ContainerText>
      <styles.ContainerText>
        <styles.FirstText>Habilities</styles.FirstText>
      </styles.ContainerText>
      <styles.SecondText style={{top: 140, left: 10}}>
        {abilities}
      </styles.SecondText>
    </styles.ContainerAbout>
  );
};

export default About;
