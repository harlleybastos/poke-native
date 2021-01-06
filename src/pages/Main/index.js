import React, {useEffect, useState} from 'react';
import {FlatList, View, StatusBar, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import PokeCard from '../../components/PokeCard';
import {PokeImageHeader} from '../../components/PokeImage/styles';
import {usePoke} from '../../context/PokeDate';
import {TextInputSearch} from './styles';
function Main() {
  const {pokemon} = usePoke();
  const nav = useNavigation();
  const [inputValue, setInputValue] = useState('');

  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    setFilteredPokemonList(pokemon.slice(0, offset));
  }, [offset, pokemon]);

  const handleSearch = () => {
    if (inputValue) {
      const filteredListPok = pokemon.filter((pokemon) => {
        return pokemon.name.includes(inputValue);
      });
      setFilteredPokemonList(filteredListPok);
    }
  };

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
      {/* <View style={{alignItems: 'center', bottom: 90}}>
        <TextInputSearch
          onChangeText={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder={'Search a pokemon...'}
        />
        <TouchableOpacity
          onPress={() => handleSearch}
          style={{
            top: 15,
            padding: 10,
            height: 50,
            width: 200,
            backgroundColor: 'rgba(10, 50, 0, 0.2)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              textTransform: 'uppercase',
              fontSize: 25,
            }}>
            Search
          </Text>
        </TouchableOpacity>
      </View> */}
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
