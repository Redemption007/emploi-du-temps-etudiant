import * as React from 'react';
import { Text } from 'react-native';

const Planning = ({ navigation }) => {
    const content = () => {
      return (
          <Text>Planning</Text>
      )
    }
  
    return (
        content()
      );
    };
  
export default Planning

/*
import * as React from 'react';
import NavBar from '../Context/navbar.js'
import Menu from "../Context/menu.js"
import { groups } from "../../runfile.json"
import { StyleSheet, Text, View } from 'react-native';
import { ical } from 'node-ical'

const data = async group => {
  try {
    const response = await ical.async.fromURL(group)
    console.log(response);
    return response
  } catch (error) {
    console.error(error);
  }
};

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

const format = async group => {
  let strings = []
  const dates = await data(group)
  dates.forEach(cours => {
    debut = new Date(cours.start_at)
    fin = new Date(cours.end_at)
    strings.push(`Cours : ${cours.categories} - ${cours.modules_for_blocks} ; Lieu : ${cours.rooms_for_block} ; Le ${debut.toLocaleDateString('fr-FR', options)} de ${debut.toLocaleTimeString('fr-FR')} à ${fin.toLocaleTimeString('fr-FR')}`)
  });
}

let planning
format(groups.favorite.url).then(array => planning = array.join("{'\n'}"))

const Planning = ({ navigation }) => {
  const content = () => {
    return (
        <Text>{planning}</Text>
    )
  }

  return (
    <View style={styles.sheet}>
        <Menu 
        Screen={'Emploi du Temps'}
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

export default Planning
*/