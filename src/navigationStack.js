import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screenA from './screenA';
import screenB from './screenB';

const Stack = createStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName={'screenA'}>
      <Stack.Screen name={'screenA'} component={screenA} />
      <Stack.Screen name={'screenB'} component={screenB} />
    </Stack.Navigator>
  );
}
