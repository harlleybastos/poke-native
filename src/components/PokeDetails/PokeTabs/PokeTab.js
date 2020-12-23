import React from 'react';
import {Text, View, Dimensions} from 'react-native';

const widthTab = Dimensions.get('window') / 4;

const PokeTab = ({title, active = false}) => {
  return (
    <View
      style={
        ({
          width: widthTab,
          alignItems: 'center',
          justifyContent: 'center',
        },
        active ? {borderBottomWidth: 3, borderBottomColor: '#000'} : {})
      }>
      <Text style={{fontSize: 18}}>{title}</Text>
    </View>
  );
};

export default PokeTab;
