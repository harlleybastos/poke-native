import React from 'react';
import {Text, View} from 'react-native';
import {ContainerAbout, ContainerText, FirstText, SecondText} from '../styles';
import {
  ContainerBaseStats,
  ContainerTextBaseStats,
  FirstTextBS,
  SecondTextBS,
} from './styles';

const BaseStats = ({stats}) => {
  return (
    <ContainerBaseStats>
      <ContainerTextBaseStats>
        <FirstTextBS>{stats[0].stat.name}</FirstTextBS>
        <SecondTextBS>{stats[0].base_stat}</SecondTextBS>
      </ContainerTextBaseStats>

      <ContainerTextBaseStats>
        <FirstTextBS>{stats[1].stat.name}</FirstTextBS>
        <SecondTextBS>{stats[1].base_stat}</SecondTextBS>
      </ContainerTextBaseStats>
      <ContainerTextBaseStats>
        <FirstTextBS>{stats[2].stat.name}</FirstTextBS>
        <SecondTextBS>{stats[2].base_stat}</SecondTextBS>
      </ContainerTextBaseStats>
      <ContainerTextBaseStats>
        <FirstTextBS>{stats[3].stat.name}</FirstTextBS>
        <SecondTextBS>{stats[3].base_stat}</SecondTextBS>
      </ContainerTextBaseStats>
      <ContainerTextBaseStats>
        <FirstTextBS>{stats[4].stat.name}</FirstTextBS>
        <SecondTextBS>{stats[4].base_stat}</SecondTextBS>
      </ContainerTextBaseStats>
    </ContainerBaseStats>
  );
};

export default BaseStats;
