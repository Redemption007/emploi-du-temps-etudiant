import * as React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';

const Agenda = ({ navigation }) => {
    const content = () => {
      return(
        <Text>Agenda</Text>
      )
    }
  
    return (
        content()
      );
    };
  
export default Agenda

/*
import * as React from 'react';
import NavBar from '../Context/navbar.js'
import Menu from "../Context/menu.js"
import { StyleSheet, Text, View } from 'react-native';

const Agenda = ({ navigation }) => {
  const content = () => {
    return (
        <Text>Bonsoir :)</Text>
    )
  }

  return (
    <View style={styles.sheet}>
        <Menu 
        Screen={'Agenda'}
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
export default Agenda
*/