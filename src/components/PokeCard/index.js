import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {usePoke} from '../../context/PokeDate';
import * as MainStyles from '~/pages/Main/styles';
import PokeCards from './PokeCards';

function PokeCard({name}) {
  const {getPokemonByName} = usePoke();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    async function getPokemon() {
      const resp = await getPokemonByName(name);
      setPokemonData(resp);
    }
    getPokemon();
  }, [getPokemonByName, name]);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        margin: 10,
      }}>
      {pokemonData ? (
        <PokeCards pokeData={pokemonData} />
      ) : (
        <MainStyles.ContainerPokeballLoading>
          <MainStyles.PokeBallLoading
            resizeMode={'contain'}
            source={require('~/image/pokeballgif.gif')}
          />
        </MainStyles.ContainerPokeballLoading>
      )}
    </View>
  );
}

export default PokeCard;
