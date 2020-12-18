import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {usePoke} from '../../context/PokeDate';
import {PokeContainer} from './styles';
const PokeCard = ({name}) => {
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
    <PokeContainer>
      {pokemonData ? (
        <Text>{pokemonData.data.name}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </PokeContainer>
  );
};

export default PokeCard;
