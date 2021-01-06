import React, {useEffect, useState} from 'react';
import {FlatList, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import PokeCard from '../../components/PokeCard';
import {PokeImageHeader} from '../../components/PokeImage/styles';
import {usePoke} from '../../context/PokeDate';
import {TextInputSearch} from './styles';
function Main() {
  const {pokemon} = usePoke();
  const nav = useNavigation();

  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    setFilteredPokemonList(pokemon.slice(0, offset));
  }, [offset, pokemon]);

  const loadMore = () => {
    setOffset((oldOffset) => oldOffset + 20);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />
      <PokeImageHeader
        resizeMode={'contain'}
        source={require('../../image/pokeLogo.png')}
      />
      <View style={{alignItems: 'center', bottom: 90}}>
        <TextInputSearch placeholder={'Search a pokemon...'} />
      </View>
      <FlatList
        style={{bottom: 60}}
        numColumns={2}
        keyExtractor={(poke, index) => index.toString()}
        data={filteredPokemonList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              nav.navigate('PokeDetails', {
                namepok: item.name,
                id: item.url,
              })
            }>
            <PokeCard name={item.name} />
          </TouchableOpacity>
        )}
        onEndReached={loadMore}
      />
    </View>
  );
}

export default Main;
