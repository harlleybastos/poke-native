import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {usePoke} from '../../context/PokeDate';
import * as PokeIMGStyles from '~/components/PokeImage/styles';
import * as PokeInfoAndCont from './styles';
import * as MainStyles from '~/pages/Main/styles';

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
        <PokeInfoAndCont.PokeContainer>
          {pokemonData?.data?.types?.length > 1 ? (
            <View>
              <PokeIMGStyles.PokeInfo>
                <PokeIMGStyles.PokeImageDiv>
                  <PokeIMGStyles.PokeImage
                    resizeMode={'contain'}
                    source={{
                      uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.data.id}.png`,
                    }}
                  />
                </PokeIMGStyles.PokeImageDiv>
              </PokeIMGStyles.PokeInfo>
              <PokeInfoAndCont.PokeName>
                {pokemonData.data.name}
              </PokeInfoAndCont.PokeName>
              <PokeInfoAndCont.PokeNumber>
                #{pokemonData.data.id}
              </PokeInfoAndCont.PokeNumber>
              <PokeInfoAndCont.PokeContainerTypeOne>
                <PokeInfoAndCont.PokeTypeOne>
                  {pokemonData?.data?.types[0].type.name}
                </PokeInfoAndCont.PokeTypeOne>
              </PokeInfoAndCont.PokeContainerTypeOne>
              <PokeInfoAndCont.PokeContainerTypeTwo>
                <PokeInfoAndCont.PokeTypeTwo>
                  {pokemonData?.data?.types[1].type.name}
                </PokeInfoAndCont.PokeTypeTwo>
              </PokeInfoAndCont.PokeContainerTypeTwo>
            </View>
          ) : pokemonData?.data?.types?.length == 1 ? (
            <View>
              <PokeIMGStyles.PokeInfoSingle>
                <PokeIMGStyles.PokeImageDivSingle>
                  <PokeIMGStyles.PokeImage
                    resizeMode={'contain'}
                    source={{
                      uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.data.id}.png`,
                    }}
                  />
                </PokeIMGStyles.PokeImageDivSingle>
              </PokeIMGStyles.PokeInfoSingle>
              <PokeInfoAndCont.PokeNameSingle>
                {pokemonData.data.name}
              </PokeInfoAndCont.PokeNameSingle>
              <PokeInfoAndCont.PokeNumberSingle>
                #{pokemonData.data.id}
              </PokeInfoAndCont.PokeNumberSingle>
              <PokeInfoAndCont.PokeContainerTypeOneSingle>
                <PokeInfoAndCont.PokeTypeOne>
                  {pokemonData?.data?.types[0].type.name}
                </PokeInfoAndCont.PokeTypeOne>
              </PokeInfoAndCont.PokeContainerTypeOneSingle>
            </View>
          ) : null}
        </PokeInfoAndCont.PokeContainer>
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
