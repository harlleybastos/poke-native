import React, {useRef} from 'react';
import {Text, View, Dimensions} from 'react-native';

const PokeTab = ({title}) => {
  return (
    <View style={{left: 15}}>
      <Text style={{fontSize: 20, margin: 10}}>{title}</Text>
    </View>
  );
};

export default PokeTab;
