import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import PokeCard from '~/components/PokeCard';
import {PokeImageHeader} from '~/components/PokeImage/styles';
import {usePoke} from '~/context/PokeDate';
import * as MainStyles from './styles';
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
        return pokemon.name.includes(inputValue.toLowerCase());
      });
      setFilteredPokemonList(filteredListPok);
    }
  };

  const loadMore = () => {
    inputValue.length == 0 ? setOffset((oldOffset) => oldOffset + 20) : null;
  };

  const clearInput = () => {
    setInputValue('');
    setFilteredPokemonList(pokemon.slice(0, offset));
  };
  return (
    <MainStyles.ContainerMain>
      <StatusBar hidden />
      <MainStyles.ContainerHeader>
        <PokeImageHeader
          resizeMode={'contain'}
          source={require('~/image/pokeLogo.png')}
        />
      </MainStyles.ContainerHeader>
      <MainStyles.ContainerSearch>
        <MainStyles.ContainerSearchBar>
          <MainStyles.TextInputSearch
            onChangeText={(e) => setInputValue(e)}
            placeholder={'Search a pokemon...'}
            value={inputValue}
          />
        </MainStyles.ContainerSearchBar>

        <MainStyles.ContainerButtonsSC>
          <MainStyles.TouchButtonSearch onPress={handleSearch}>
            <MainStyles.TextButtonSearch>Search</MainStyles.TextButtonSearch>
          </MainStyles.TouchButtonSearch>

          <MainStyles.TouchButtonClear onPress={clearInput}>
            <MainStyles.TextButtonClear>Clear</MainStyles.TextButtonClear>
          </MainStyles.TouchButtonClear>
        </MainStyles.ContainerButtonsSC>
      </MainStyles.ContainerSearch>
      <MainStyles.ListOfPokemons
        numColumns={2}
        keyExtractor={(poke, index) => index.toString()}
        data={filteredPokemonList}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() =>
              nav.navigate('PokeDetails', {
                namepok: item.name,
                id: item.url,
              })
            }>
            <PokeCard name={item.name} />
          </TouchableWithoutFeedback>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </MainStyles.ContainerMain>
  );
}

export default Main;
