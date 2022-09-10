import React, {useRef} from 'react';
import { DrawerLayoutAndroid, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import createNew from './createnewGroup.js'

const Menu = a => {
    const Contenu = a.content
    const drawer = useRef(null);
    const navigationView = () => (
        <View>
            <View style={styles.esthet}></View>
            <TouchableHighlight onPress={() => drawer.current.closeDrawer()}>
                <View>
                    <Image style={styles.croix} source={require('../Icons/croix.png')} />
                </View>
            </TouchableHighlight>
            <View style={styles.list}>
                <TouchableHighlight onPress={() => {a.nav.navigate('Settings')}} style={styles.boutons}><Text style={styles.textBouton}>Paramètres</Text></TouchableHighlight>
                <TouchableHighlight onPress={() => {a.nav.navigate('About')}} style={styles.boutons}><Text style={styles.textBouton}>A Propos</Text></TouchableHighlight>
                <TouchableHighlight onPress={createNew} style={styles.boutons}><Text style={styles.textBouton}>Nouvel Emploi du Temps</Text></TouchableHighlight>
            </View>
        </View>
    );
    const DrawerLayout = () => {
        return (
            <DrawerLayoutAndroid
            drawerWidth={300}
            keyboardDismissMode={'on-drag'}
            ref={drawer}
            renderNavigationView={navigationView}
            >
            <View style={styles.header}>
                <Image style={styles.menu} source={require('../Icons/menu.png')} />
            <TouchableHighlight onPress={() => drawer.current.openDrawer()} style={styles.options}>
                <View></View>
            </TouchableHighlight>
            <Text style={styles.text}>{a.Screen}</Text>
            </View>
            <Contenu />
            </DrawerLayoutAndroid>
        )
    }
    return DrawerLayout();
}
const styles = StyleSheet.create({
    boutons: {
        width: '100%',
        height: '10%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginBottom: 2
    },
    croix: {
        position: 'absolute',
        top:5,
        right:0,
        height: 40,
        width: 40,
        resizeMode: 'stretch'
    },
    esthet: {
        left: -2,
        top: -2,
        width: '105%',
        height: '15%',
        backgroundColor: '#000'
    },
    header: {
        width: '100%',
        height: '13%',
        backgroundColor: '#000',
    },
    list: {
        display: 'flex',
        height: '73%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'space-around',
        paddingTop: '20%',
        marginTop: '20%',
        justifyContent: 'flex-start'
    },
    menu: {
        marginTop: 40,
        marginLeft: 40,
        height: 60,
        width: 62,
        resizeMode: 'stretch'
    },
    options: {
        position: 'absolute',
        top: 30,
        bottom:0,
        width: 120
    },
    text: {
        textAlign: 'center',
        top: -46,
        marginRight: 20,
        marginLeft: 70,
        color: '#fff',
        fontSize: 28,
        fontWeight: '500',
    },
    textBouton: {
        textAlign: 'center',
        padding: 18,
        marginBottom: -4,
        fontSize: 20,
        fontWeight: '300'
    }
})

export default Menu
