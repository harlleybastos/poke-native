import React, {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {usePoke} from '~/context/PokeDate';
import PokeDetailsContent from './PokeDetailsContent';

function PokeDetails({route}) {
  const {namepok, id} = route.params;
  const {getPokemonByName} = usePoke();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    async function getPokemon() {
      const resp = await getPokemonByName(namepok);
      setPokemonData(resp);
    }
    getPokemon();
  }, [getPokemonByName, id, namepok]);

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      {pokemonData ? <PokeDetailsContent pokemonData={pokemonData} /> : null}
    </View>
  );
}
export default PokeDetails;
