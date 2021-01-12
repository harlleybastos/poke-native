import React from 'react';
import * as BaseStatsStyles from './styles';

const BaseStats = ({stats}) => {
  return (
    <BaseStatsStyles.ContainerBaseStats>
      <BaseStatsStyles.ContainerTextBaseStats>
        <BaseStatsStyles.FirstTextBS>
          {stats[0].stat.name}
        </BaseStatsStyles.FirstTextBS>
        <BaseStatsStyles.SecondTextBS>
          {stats[0].base_stat}
        </BaseStatsStyles.SecondTextBS>
      </BaseStatsStyles.ContainerTextBaseStats>

      <BaseStatsStyles.ContainerTextBaseStats>
        <BaseStatsStyles.FirstTextBS>
          {stats[1].stat.name}
        </BaseStatsStyles.FirstTextBS>
        <BaseStatsStyles.SecondTextBS>
          {stats[1].base_stat}
        </BaseStatsStyles.SecondTextBS>
      </BaseStatsStyles.ContainerTextBaseStats>
      <BaseStatsStyles.ContainerTextBaseStats>
        <BaseStatsStyles.FirstTextBS>
          {stats[2].stat.name}
        </BaseStatsStyles.FirstTextBS>
        <BaseStatsStyles.SecondTextBS>
          {stats[2].base_stat}
        </BaseStatsStyles.SecondTextBS>
      </BaseStatsStyles.ContainerTextBaseStats>
      <BaseStatsStyles.ContainerTextBaseStats>
        <BaseStatsStyles.FirstTextBS>
          {stats[3].stat.name}
        </BaseStatsStyles.FirstTextBS>
        <BaseStatsStyles.SecondTextBS>
          {stats[3].base_stat}
        </BaseStatsStyles.SecondTextBS>
      </BaseStatsStyles.ContainerTextBaseStats>
      <BaseStatsStyles.ContainerTextBaseStats>
        <BaseStatsStyles.FirstTextBS>
          {stats[4].stat.name}
        </BaseStatsStyles.FirstTextBS>
        <BaseStatsStyles.SecondTextBS>
          {stats[4].base_stat}
        </BaseStatsStyles.SecondTextBS>
      </BaseStatsStyles.ContainerTextBaseStats>
    </BaseStatsStyles.ContainerBaseStats>
  );
};

export default BaseStats;
