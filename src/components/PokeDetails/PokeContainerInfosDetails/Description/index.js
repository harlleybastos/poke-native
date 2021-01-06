import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import getEvolutions from '../../../../services/getEvolutions';
import {ContainerPokeball, PokeballImage} from '../PokeballLoading/styles';
import * as styles from './styles';
const Description = ({id, name}) => {
  const [evolution, setEvolution] = useState([]);

  useEffect(() => {
    getEvolutions(id, setEvolution);
  }, [id]);
  return (
    <View>
      <styles.ContainerDescription>
        {evolution[0]?.description ? (
          <styles.Description>{evolution[0]?.description}</styles.Description>
        ) : (
          <ContainerPokeball>
            <PokeballImage
              resizeMode={'contain'}
              source={require('../../../../image/pokeballgif.gif')}
            />
          </ContainerPokeball>
        )}
      </styles.ContainerDescription>
    </View>
  );
};

export default Description;
