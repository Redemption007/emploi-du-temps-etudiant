import React, {useState} from "react";
import { Image, Text, View, Pressable, StyleSheet, Modal } from "react-native"

export default Param = ({setting}) => {
    function determine_component(value) {
        //détermine le composant à utiliser pour symboliser la valeur en fonction du type de valeur :
        //
        // Booléen :
        //  -> Bouton ON/OFF
        // String :
        //  -> Menu avec propositions
        // Color :
        //  -> Color Picker/HexString
        // Heure :
        //  -> Modal d'horloge
        return
    }

    function format (key) {
        // Renvoie une Chaîne formatée en fonction de la clé
        return key

    }
    if (setting[0]==='_id') return
    return(
        <View style={styles.view}>
            <Text style={styles.textVar}>{format(setting[0])}  :</Text>
            <Text style={styles.textValue}>{setting[1].toString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 15,
        margin: 1,
    },
    textVar: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        /*
        */
    },
    textValue: {
        fontSize: 20,
        fontStyle: 'italic',
        paddingRight: 10,
    }
})