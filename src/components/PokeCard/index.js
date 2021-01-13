import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
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
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
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
