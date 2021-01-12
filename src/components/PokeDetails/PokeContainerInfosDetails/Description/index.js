import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import getEvolutions from '~/services/getEvolutions';
import * as PokeBallLoadingStyles from '~/components/PokeDetails/PokeContainerInfosDetails/PokeballLoading/styles';
import * as DescriptionStyles from './styles';
const Description = ({id}) => {
  const [evolution, setEvolution] = useState([]);

  useEffect(() => {
    getEvolutions(id, setEvolution);
  }, [id]);
  return (
    <View>
      <DescriptionStyles.ContainerDescription>
        {evolution[0]?.description ? (
          <DescriptionStyles.Description>
            {evolution[0]?.description}
          </DescriptionStyles.Description>
        ) : (
          <PokeBallLoadingStyles.ContainerPokeball>
            <PokeBallLoadingStyles.PokeballImage
              resizeMode={'contain'}
              source={require('~/image/pokeballgif.gif')}
            />
          </PokeBallLoadingStyles.ContainerPokeball>
        )}
      </DescriptionStyles.ContainerDescription>
    </View>
  );
};

export default Description;
