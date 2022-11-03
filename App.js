import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cau1 } from './Cau1';
import { Cau2 } from './Cau2';
import { Cau3 } from './Cau3';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {/* <Stack.Screen name="Cau 1" component={Cau1} /> */}
        {/* <Stack.Screen name="Cau 2" component={Cau2} /> */}
        <Stack.Screen name="Cau 3" component={Cau3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
