import React from 'react';
import PokeDate from './context/PokeDate';
import Main from './pages/Main';
import PokeDetails from './pages/PokeDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import PokeCard from './components/PokeCard';

const Stack = createStackNavigator();

function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <PokeDate>
        <Stack.Navigator initialRouteName={Main}>
          <Stack.Screen
            name="Main"
            options={{
              title: null,
              headerShown: true,
              headerTransparent: true,
            }}
            component={Main}
          />
          <Stack.Screen name="PokeCard" component={PokeCard} />
          <Stack.Screen
            name="PokeDetails"
            options={{
              title: null,
              headerShown: true,
              headerTransparent: true,
              cardStyle: {
                backgroundColor: '#237678',
              },
            }}
            component={PokeDetails}
          />
        </Stack.Navigator>
      </PokeDate>
    </NavigationContainer>
  );
}

export default App;
