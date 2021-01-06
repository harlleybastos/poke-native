import React from 'react';
import * as styles from './styles';

const BaseStats = ({stats}) => {
  return (
    <styles.ContainerBaseStats>
      <styles.ContainerTextBaseStats>
        <styles.FirstTextBS>{stats[0].stat.name}</styles.FirstTextBS>
        <styles.SecondTextBS>{stats[0].base_stat}</styles.SecondTextBS>
      </styles.ContainerTextBaseStats>

      <styles.ContainerTextBaseStats>
        <styles.FirstTextBS>{stats[1].stat.name}</styles.FirstTextBS>
        <styles.SecondTextBS>{stats[1].base_stat}</styles.SecondTextBS>
      </styles.ContainerTextBaseStats>
      <styles.ContainerTextBaseStats>
        <styles.FirstTextBS>{stats[2].stat.name}</styles.FirstTextBS>
        <styles.SecondTextBS>{stats[2].base_stat}</styles.SecondTextBS>
      </styles.ContainerTextBaseStats>
      <styles.ContainerTextBaseStats>
        <styles.FirstTextBS>{stats[3].stat.name}</styles.FirstTextBS>
        <styles.SecondTextBS>{stats[3].base_stat}</styles.SecondTextBS>
      </styles.ContainerTextBaseStats>
      <styles.ContainerTextBaseStats>
        <styles.FirstTextBS>{stats[4].stat.name}</styles.FirstTextBS>
        <styles.SecondTextBS>{stats[4].base_stat}</styles.SecondTextBS>
      </styles.ContainerTextBaseStats>
    </styles.ContainerBaseStats>
  );
};

export default BaseStats;
