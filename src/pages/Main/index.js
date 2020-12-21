import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, ScrollView, Image} from 'react-native';
import PokeCard from '../../components/PokeCard';
import {PokeHeader} from '../../components/PokeHeader/styles';
import {PokeImageHeader} from '../../components/PokeImage/styles';
import {usePoke} from '../../context/PokeDate';
function Main() {
  const {pokemon} = usePoke();

  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    setFilteredPokemonList(pokemon.slice(0, offset));
  }, [offset, pokemon]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <PokeImageHeader
        resizeMode={'contain'}
        source={require('../../image/pokeLogo.png')}
      />
      <FlatList
        numColumns={2}
        keyExtractor={(poke, index) => index.toString()}
        data={filteredPokemonList}
        renderItem={({item}) => <PokeCard name={item.name} />}
      />
    </View>
  );
}

export default Main;
