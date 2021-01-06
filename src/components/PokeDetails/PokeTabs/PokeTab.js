import React from 'react';
import {Text, View} from 'react-native';

const PokeTab = ({title}) => {
  return (
    <View style={{left: 15}}>
      <Text style={{fontSize: 19, margin: 10}}>{title}</Text>
    </View>
  );
};

export default PokeTab;
