import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native';

import Accueil from './Elements/Pages/accueil.js'
import Agenda from './Elements/Pages/agenda.js'
import Planning from './Elements/Pages/planning.js'
import About from './Elements/Pages/about.js'
import Settings from './Elements/Pages/settings.js'

const Stack = createNativeStackNavigator();

const options = () => ({
  header: () => {}
})

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={Accueil}
          options={options}
        />
        <Stack.Screen
          name="Agenda"
          component={Agenda}
          options={options}
        />
        <Stack.Screen
          name="Planning"
          component={Planning}
          options={options}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={options}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={options}
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
