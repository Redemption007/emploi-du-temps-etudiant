import * as React from 'react';
import { Linking, View, Text } from 'react-native';

const About = ({ navigation }) => {
    const content = () => {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 60,
          backgroundColor: '#dddddd',
          /*
          */
          }}>
          <Text>
          Cette application a été développée par un étudiant, pour des étudiants.{"\n"}
          Pour la moindre remarque, n'hésitez pas à me joindre à  
          <Text onPress={() => Linking.openURL('mailto:b.a.p.t.s.t.e7@gmail.com')}> b.a.p.t.s.t.e7@gmail.com </Text>
          ou bien à poster un commentaire sur le PlayStore.{"\n\n\n\n"}
          La licence de l'AppStore coûtant horriblement cher, (99$ USD annuel) une version compatible iOS n'est pas prévue.{"\n\n\n\n\n"}
          Pour obtenir votre emploi du temps sur cette application, récupérez le lien ICS de l'emploi du temps et
          appuyez sur '+' dans la page <Text onPress={() => navigation.navigate('Calendriers')}>Calendriers</Text>.{"\n\n\n\n\n\n\n\n"}
          Dernière version mise en production le : 21/02/2023.
          </Text>
        </View>
      )
    }
  
    return (
        content()
      );
    };
  
export default About

/*
import * as React from 'react';
import NavBar from '../Context/navbar.js'
import Menu from "../Context/menu.js"
import { Linking, StyleSheet, Text, View } from 'react-native';

const About = ({ navigation }) => {
    const content = () => {
        return (
            <Text style={styles.content}></Text>
        )
    }

    return (
        <View style={styles.sheet}>
            <Menu 
            Screen={'A propos'}
            content={content}
            nav ={navigation}/>
            <NavBar navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 30,
    paddingTop: 15,
    textAlign: 'justify',
    fontSize: 24,
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

export default About
*/