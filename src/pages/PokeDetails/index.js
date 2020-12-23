import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PokeContainerDetails} from '../../components/PokeDetails/PokeContainerDetails/styles';
import {
  PokeContainerID,
  PokeID,
} from '../../components/PokeDetails/PokeContainerId/styles';
import {
  PokeContainerImage,
  PokeImage,
} from '../../components/PokeDetails/PokeContainerImage/styles';
import {PokeDetailsTab} from '../../components/PokeDetails/PokeContainerTabs/styles';
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

function PokeDetails({route, navigation}) {
  const {namepok} = route.params;
  const myRefs = useRef([]);
  const [tabs] = useState([
    {
      id: 0,
      name: 'About',
    },
    {
      id: 1,
      name: 'Base Stats',
    },
    {
      id: 2,
      name: 'Evolution',
    },
    {
      id: 3,
      name: 'Moves',
    },
  ]);
  const {getPokemonByName} = usePoke();
  const [pokemonData, setPokemonData] = useState({});
  const [active, setActive] = useState(false);
  useEffect(() => {
    async function getPokemon() {
      const resp = await getPokemonByName(namepok);
      setPokemonData(resp);
    }
    getPokemon();
  }, [getPokemonByName, namepok]);

  useEffect(() => {
    StatusBar.setHidden(true);
    navigation.setOptions({
      title: null,
      headerShown: true,
      headerTransparent: true,
      cardStyle: {
        backgroundColor: '#237678',
      },
    });
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      {pokemonData ? (
        <View>
          <PokeName>{pokemonData?.data?.name}</PokeName>
          {pokemonData?.data?.types?.length > 1 ? (
            <>
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
            </>
          ) : (
            <>
              <PokeTypeOneContainer>
                <PokeTypeOneText>
                  {pokemonData?.data?.types[0].type.name}
                </PokeTypeOneText>
              </PokeTypeOneContainer>
            </>
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
            <PokeTabs>
              {tabs.map((tab) => (
                <TouchableOpacity
                  key={tab.id}
                  onPress={() => {
                    const stateactivity = active;
                    setActive(!stateactivity);
                  }}>
                  <View ref={(el) => (myRefs.current[tab.id] = el)}>
                    <PokeTab
                      ref={(el) => (myRefs.current[tab.id] = el)}
                      active={active}
                      title={tab.name}
                    />
                  </View>
                </TouchableOpacity>
              ))}
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
