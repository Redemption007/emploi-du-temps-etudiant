import * as React from 'react';
import { DrawerLayoutAndroid, StyleSheet, TouchableHighlight, View } from 'react-native';

const navigationView = () => (
    <View style={styles.navigationContainer}>
        <TouchableHighlight onPress={() => closeDrawer()}>
            <View>
                <Image style={styles.croix} source={require('../Icons/croix.png')} />
            </View>
        </TouchableHighlight>
        </View>
  );    
const Menu = () => {
    return (
        <DrawerLayoutAndroid
        drawerWidth={300}
        drawerLockMode={'unlocked'}
        renderNavigationView={navigationView}
        >
        <View>
        <TouchableHighlight onPress={() => openDrawer()}>
            <View>
                <Image style={styles.menu} source={require('../Icons/menu.jpg')} />
            </View>
        </TouchableHighlight>
        </View>
        </DrawerLayoutAndroid>
    )
}

const styles = StyleSheet.create({
    croix: {
        display: 'flex',
        alignItems: 'flex-end',
        height: 50,
        width: 50,
    },
    menu: {
        height: 50,
        width: 50,
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    }
})

module.exports = Menu