import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import './Elements/Database/global'

import Tabber from './Elements/Pages/tabber'
import Settings from './Elements/Pages/settings'
import Calendars from './Elements/Pages/calendars'
import About from './Elements/Pages/about'

const Drawer = createDrawerNavigator();
// global.database.clean_All()

export default function App() {

  
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={Tabber} />
        <Drawer.Screen name="Paramètres" component={Settings} />
        <Drawer.Screen name="Calendriers" component={Calendars} />
        <Drawer.Screen name="À propos" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}