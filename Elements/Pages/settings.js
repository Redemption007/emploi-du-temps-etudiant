import * as React from 'react';
import { Text } from 'react-native';

const Settings = ({ navigation }) => {
    const content = () => {
      return (
          <Text>Settings</Text>
      )
    }
  
    return (
        content()
      );
    };
  
export default Settings


/*
import * as React from 'react';
import NavBar from '../Context/navbar.js'
import Menu from "../Context/menu.js"
import { settings } from "../../runfile.json"
import { StyleSheet, Text, View } from 'react-native';

const Settings = ({ navigation }) => {
  const theme = type => {
    switch (type) {
    case 'black' : return "Sombre"
    default: return "Clair"
    }
  }
  const color = color => {
    switch (color) {
    case '#fff': return "Blanc"
    case '#000': return "Noir"
    default: return "Pas de couleur prédéfinie"
    }
  }
  const time = (string, format = false) => {
    let time_array = string.split(':')
    time_array.unshift(`${Math.floor(time_array[0]/24)}`)
    time_array[1] = time_array[1]%24
    if (format) return `${+time_array[0]>0?+time_array[0]+" jour"+(+time_array[0]>1?"s":""):""} \
${+time_array[1]>0?time_array[1]+" heure"+(+time_array[1]>1?"s":""):""} \
${+time_array[2]>0?+time_array[2]+" minute"+(+time_array[2]>1?"s":""):""}`
    return `${+time_array[1]>0?+time_array[1]+"h":"Minuit"} ${+time_array[2]>0?time_array[2]+"min":""}`
  }
  const language = lang => {
    switch (lang) {
    case 'fr': return 'Français'
    case 'it': return 'Italiano'
    case 'es': return 'Spagnolo'
    case 'de': return 'Deutsch'
    }
  }
  const content = () => {
    return (
        <Text>
        Thème : {theme(settings.theme)}{"\n"}
        Langue : {language(settings.langage)}{"\n"}
        Plein écran : {settings.fullscreen? "Oui":"Non"}{"\n"}
        Orientation de l'emploi du temps : {settings.orientation[0].toUpperCase()+settings.orientation.slice(1)}{"\n"}
        Verrouillage de l'orientation de l'application : {settings.orientation_locked? "Oui":"Non"}{"\n"}
        Couleur des modules : {color(settings.color)}{"\n"}
        Jours affichés : Lundi, Mardi, Mercredi, Jeudi, Vendredi{settings.saturday?", Samedi":""}{settings.sunday?", Dimanche":""}.{"\n"}
        Heure de synchronisation des calendriers : {time(settings.sync_calendar_hour)}{"\n"}
        Heure de synchronisation des widget sur l'écran d'accueil : {time(settings.sync_widget_interval)}{"\n"}
        Intervalle de rappel des tâches : {time(settings.reminder_interval, true)}
        </Text>
    )
  }

  return (
    <View style={styles.sheet}>
        <Menu 
        Screen={'Paramètres'}
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

export default Settings
*/