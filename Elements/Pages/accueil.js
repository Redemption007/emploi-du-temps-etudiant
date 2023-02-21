import * as React from 'react';
import { Text } from 'react-native';

const Accueil = ({ navigation }) => {
    const content = () => {
      return (
          <Text>Accueil ={'>'} Résumé</Text>
      )
    }
  
    return (
        content()
      );
    };
  
export default Accueil




/*import * as React from 'react';
import NavBar from '../Context/navbar.js'
import Menu from "../Context/menu.js"
import { StyleSheet, Text, View } from 'react-native';

const Accueil = ({ navigation }) => {
    const content = () => {
      return (
          <Text>Bonsoir :)</Text>
      )
  }

  return (
    <View style={styles.sheet}>
        <Menu 
        Screen={'Résumé'}
        content={content}
        nav ={navigation}/>
        <NavBar navigation={navigation}/>
      </View>
    );
  };

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: '90%'
  },
  sheet: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: 0
  }
})

export default Accueil
*/