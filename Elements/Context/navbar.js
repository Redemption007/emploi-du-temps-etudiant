import * as React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

const NavBar = ({ navigation }) => {
    const onPress = whereTo => {navigation.navigate(whereTo)}
    const Bouton = (params) => {
        return (
            <TouchableHighlight onPress={onPress(params.whereTo)}>
            <View>
                <Image style={styles.icon} source={params.path}/>
            </View>
            </TouchableHighlight>
        );
    }          

    return (
        <View style={styles.navbar}>
            <Bouton whereTo={'Accueil'} path={require('../Icons/home.png')}/>
            <Bouton whereTo={'Agenda'} path={require('../Icons/task.png')}/>
            <Bouton whereTo={'Planning'} path={require('../Icons/planning.png')}/>
      </View>
    );
}
const styles = StyleSheet.create({
    icon: {
        margin: 15,
        width: 70,
        height: 60,
        resizeMode: 'stretch'
    },
    navbar: {
        height: 80,
        width: '100%',
        display: "flex",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000",
        flexDirection: 'row',
    },
  });
  

module.exports = NavBar