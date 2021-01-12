import React from 'react';
import {Text, View} from 'react-native';

const PokeTab = ({title}) => {
  return (
    <View style={{margin: 5, left: 20}}>
      <Text style={{fontSize: 18}}>{title}</Text>
    </View>
  );
};

export default PokeTab;
