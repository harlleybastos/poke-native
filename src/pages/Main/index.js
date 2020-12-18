import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import PokeCard from '../../components/PokeCard';
import {usePoke} from '../../context/PokeDate';
function Main() {
  const {pokemon} = usePoke();

  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    setFilteredPokemonList(pokemon.slice(0, offset));
  }, [offset, pokemon]);

  return (
    <View style={{flexGrow: 1}}>
      <ScrollView>
        <FlatList
          numColumns={4}
          keyExtractor={(poke, index) => index.toString()}
          data={filteredPokemonList}
          renderItem={({item}) => (
            <PokeCard style={{flex: 1}} name={item.name} />
          )}
        />
      </ScrollView>
    </View>
  );
}

export default Main;
