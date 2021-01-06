import React, {useEffect, useState} from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {PokeContainerDetails} from '../../components/PokeDetails/PokeContainerDetails/styles';
import {
  PokeContainerID,
  PokeID,
} from '../../components/PokeDetails/PokeContainerId/styles';
import {
  PokeContainerImage,
  PokeImage,
} from '../../components/PokeDetails/PokeContainerImage/styles';

import {
  PokeTypeOneContainer,
  PokeTypeOneText,
  PokeTypeTwoContainer,
  PokeTypeTwoText,
} from '../../components/PokeDetails/PokeContainerType/styles';
import {PokeName} from '../../components/PokeDetails/PokeName/styles';
import PokeTabs from '../../components/PokeDetails/PokeTabs';
import PokeTab from '../../components/PokeDetails/PokeTabs/PokeTab';
import {usePoke} from '../../context/PokeDate';
import About from '../../components/PokeDetails/PokeContainerInfosDetails/About';
import BaseStats from '../../components/PokeDetails/PokeContainerInfosDetails/BaseStats';
import Evolutions from '../../components/PokeDetails/PokeContainerInfosDetails/Evolutions';
import Description from '../../components/PokeDetails/PokeContainerInfosDetails/Description';

function PokeDetails({route}) {
  const {namepok, id} = route.params;
  const {getPokemonByName} = usePoke();
  const [pokemonData, setPokemonData] = useState({});
  const [indexref, setIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const [tabs, setTabs] = useState([
    {
      id: 0,
      name: 'Description',
    },
    {
      id: 1,
      name: 'About',
    },
    {
      id: 2,
      name: 'Base Stats',
    },
    {
      id: 3,
      name: 'Evolution',
    },
  ]);

  const handleSelected = (ind) => {
    const newRepositores = tabs.map((pok, index) => {
      return index === ind ? {...pok, favorite: !pok.favorite} : pok;
    });
    setTabs(newRepositores);
  };

  useEffect(() => {
    async function getPokemon() {
      const resp = await getPokemonByName(namepok);
      setPokemonData(resp);
    }
    getPokemon();
  }, [getPokemonByName, id, namepok]);

  return (
    <View style={{flex: 1}}>
      {console.log(pokemonData)}
      <StatusBar hidden />
      {pokemonData ? (
        <View>
          <PokeName>{pokemonData?.data?.name}</PokeName>
          {pokemonData?.data?.types?.length > 1 ? (
            <View>
              <PokeTypeOneContainer>
                <PokeTypeOneText>
                  {pokemonData?.data?.types[0].type.name}
                </PokeTypeOneText>
              </PokeTypeOneContainer>
              <PokeTypeTwoContainer>
                <PokeTypeTwoText>
                  {pokemonData?.data?.types[1]?.type.name}
                </PokeTypeTwoText>
              </PokeTypeTwoContainer>
            </View>
          ) : (
            <PokeTypeOneContainer>
              <PokeTypeOneText>
                {pokemonData?.data?.types[0].type.name}
              </PokeTypeOneText>
            </PokeTypeOneContainer>
          )}

          <PokeContainerID>
            <PokeID>
              #{pokemonData?.data?.id.toString().padStart(3, '0')}
            </PokeID>
          </PokeContainerID>
          <PokeContainerImage>
            <PokeImage
              resizeMode={'contain'}
              source={{
                uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonData.data?.id}.png`,
              }}
            />
          </PokeContainerImage>
          <PokeContainerDetails>
            {(indexref == 0 && favorite == true) || favorite == false ? (
              <Description
                name={pokemonData?.data?.name}
                id={pokemonData?.data?.id}
              />
            ) : indexref == 1 && favorite == true ? (
              <About
                types={pokemonData?.data?.types[0].type.name}
                height={pokemonData?.data?.height}
                weight={pokemonData?.data?.weight}
                abilities={pokemonData?.data?.abilities
                  .map((item) => item.ability.name)
                  .join(' | ')}
              />
            ) : indexref == 2 && favorite == true ? (
              <BaseStats
                stats={pokemonData?.data?.stats?.map((item) => item)}
              />
            ) : indexref == 3 && favorite == true ? (
              <Evolutions
                name={pokemonData?.data?.name}
                id={pokemonData?.data?.id}
                comp={pokemonData?.data?.id}
              />
            ) : null}
            <PokeTabs>
              <FlatList
                numColumns={6}
                keyExtractor={(item) => item.id.toString()}
                data={tabs}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={
                        favorite && index === indexref
                          ? {
                              borderColor: '#000',
                              borderBottomStartRadius: 200,
                              borderBottomRightRadius: 100,
                              borderBottomWidth: 5,
                            }
                          : !favorite && index == 0
                          ? {
                              borderColor: '#000',
                              borderBottomStartRadius: 200,
                              borderBottomRightRadius: 100,
                              borderBottomWidth: 5,
                            }
                          : null
                      }>
                      <TouchableOpacity
                        onPress={() => {
                          let fav = !true;
                          handleSelected(index);
                          setIndex(index);
                          setFavorite(!fav);
                        }}>
                        <PokeTab
                          favorite={favorite}
                          title={item.name}
                          index={index}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </PokeTabs>
          </PokeContainerDetails>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
export default PokeDetails;
