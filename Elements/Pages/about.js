import * as React from 'react';
import { Text } from 'react-native';

const About = ({ navigation }) => {
    const content = () => {
      return (
        <Text>Cette application a été développée par un étudiant, pour des étudiants.{"\n"}
        Pour la moindre remarque, n'hésitez pas à me joindre à  
        <Text onPress={() => Linking.openURL('mailto:b.a.p.t.s.t.e7@gmail.com')}> b.a.p.t.s.t.e7@gmail.com</Text> ou bien à poster un commentaire sur le PlayStore.{"\n"}
        La licence de l'AppStore coûtant horriblement cher, (99$ USD annuel) une version compatible iOS n'est pas prévue.{"\n"}{"\n"}
        Pour obtenir votre emploi du temps sur cette application, récupérez le lien ICS de l'emploi du temps et entrez-le dans la zone texte de la page Nouvel Emploi du Temps.{"\n"}{"\n"}
        Dernière version mise en production le : 11/09/2022.
    </Text>
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