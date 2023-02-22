import General_Database from './load'
import {Alert} from 'react-native'


global.database = new General_Database()
global.alert_error = () => {
    Alert.alert('Erreur', `Une erreur s\'est produite. Merci de redémarrer l'application.`, [{text: 'OK'}]);
}