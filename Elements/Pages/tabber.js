import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Planning from './planning'
import Agenda from './agenda'
import Accueil from './accueil'


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Résumé' tabBarPosition='bottom'>
      <Tab.Screen name="Agenda" component={Agenda} />
      <Tab.Screen name="Résumé" component={Accueil} />
      <Tab.Screen name="Emploi du temps" component={Planning} />
    </Tab.Navigator>
  );
}

const Tabber = ({ navigation }) => {
    const content = () => {
      return
    }
  
    return (
      <NavigationContainer independent={true}>
        <MyTabs />
      </NavigationContainer>
      );
    };
  
export default Tabber
