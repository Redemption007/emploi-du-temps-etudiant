import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native';

import Accueil from './Elements/Pages/accueil.js'
import Agenda from './Elements/Pages/agenda.js'
import Planning from './Elements/Pages/planning.js'
import Menu from './Elements/Context/menu.js'
import Settings from './Elements/Context/settings.js'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={Accueil}
        />
        <Stack.Screen
          name="Agenda"
          component={Agenda}
        />
        <Stack.Screen
          name="Planning"
          component={Planning}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
