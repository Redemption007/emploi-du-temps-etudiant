import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  const Stack = createNativeStackNavigator();

  const Menu = ({ navigation }) => {
    return (
      <View style={styles.menu}>
        <Button
          title="Accueil"
          onPress={() => navigation.navigate('Resume')}
        />
        <Button
          title='Tâches'
          onPress={() => navigation.navigate('Tasks')}
        />
        <Button
          title='Planning'
          onPress={() => navigation.navigate('Planning')}
        />
      </View>
    );
  }
  const Resume = ({ navigation }) => {
    return (
      <Menu navigation={navigation}/>
    );
  };
  const Tasks = ({ navigation }) => {
    return (
      <Menu navigation={navigation}/>
    );
  }
  const Planning = ({ navigation }) => {
    return (
      <Menu navigation={navigation}/>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Resume"
          component={Resume}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
        />
        <Stack.Screen
          name="Planning"
          component={Planning}
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
  },
  menu: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});
