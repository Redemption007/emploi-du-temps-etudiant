import * as React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const NavBar = ({ navigation }) => {
    const Bouton = (p) => {
        return (
            <TouchableHighlight onPress={() => navigation.navigate(p.whereTo)} style={styles.bouton}>
            <View>
                <Image style={styles.icon} source={p.path}/>
            </View>
            </TouchableHighlight>
        );
    }

    return (
        <View style={styles.navbar}>
            <Bouton whereTo={'Agenda'} path={require('../Icons/task.png')}/>
            <Bouton whereTo={'Accueil'} path={require('../Icons/home.png')}/>
            <Bouton whereTo={'Planning'} path={require('../Icons/planning.png')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    bouton: {
        width: "33.333%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'stretch'
    },
    navbar: {
        height: "10%",
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000",
    },
  });
  

export default NavBar