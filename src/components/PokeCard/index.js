import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {usePoke} from '../../context/PokeDate';
import {
  PokeImageDiv,
  PokeInfo,
  PokeImage,
} from '../../components/PokeImage/styles';
import {
  PokeContainer,
  PokeName,
  PokeContainerType,
  PokeType,
  PokeNumber,
} from './styles';

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
        margin: 20,
      }}>
      {pokemonData ? (
        <PokeContainer>
          <PokeNumber>#{pokemonData.data.id}</PokeNumber>
          <PokeInfo>
            <PokeImageDiv>
              <PokeImage
                resizeMode={'contain'}
                source={{
                  uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.data.id}.png`,
                }}
              />
            </PokeImageDiv>
            <PokeName>{pokemonData.data.name}</PokeName>
          </PokeInfo>
          <PokeContainerType>
            <PokeType>
              {pokemonData.data.types.map((type) => type.type.name).join('\n')}
            </PokeType>
          </PokeContainerType>
        </PokeContainer>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default PokeCard;
