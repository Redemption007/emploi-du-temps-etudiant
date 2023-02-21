import React, {useState} from "react";
import { Image, Text, View, Pressable, StyleSheet, Modal } from "react-native"

const Group_item = ({item, update, suppr}) => {

    console.log(`Group item updated : ${item.name} est ${item.visible?'':'in'}visible`);

    const [modalVisible, setModalVisible] = useState(false);

    settings = global.database.get('settings')[0]

    const try_delete = () => {
        setModalVisible(true)
    }

    let icon = item.visible
        ? settings.dark_theme
            ? require(`../Icons/white_checked.png`)
            : require(`../Icons/black_checked.png`)
        : settings.dark_theme
            ? require(`../Icons/white_unchecked.png`)
            : require(`../Icons/black_unchecked.png`)

    return (
        <View>
            <View style={{
                flex: 1,
                paddingHorizontal:20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: "space-between",
                backgroundColor: '#fff',
                height:'auto',
                paddingVertical: 15
            }}>
                <Pressable hitSlop={20} onPress={() => update(item)}>
                    <Image style={{width: 41, height: 46}} source={icon}/>
                </Pressable>

                <Text style={{paddingTop: 17, fontSize: 24, width: '70%'}}>{item.name}</Text>

                <Pressable hitSlop={40} onPress={try_delete}>
                    <Image style={{width: 28, height: 35}} source={require(`../Icons/z_poubelle.png`)}/>
                </Pressable>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Êtes-vous sûr de vouloir supprimer ce groupe ?</Text>
                        
                    <View style={{flexDirection: 'row'}}>
                        <Pressable
                        style={[styles.button, styles.buttonCancel]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textCancelStyle}>Oups ! Non</Text>
                        </Pressable>
                        
                        <Pressable
                        style={[styles.button, styles.buttonDelete]}
                        onPress={() => {
                            setModalVisible(false)
                            suppr(item)
                            }}>
                        <Text style={styles.textStyle}>Certain !</Text>
                        </Pressable>
                    </View>
                </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
      },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonCancel: {
        backgroundColor: '#2196F3',
        marginHorizontal: 10
    },
    buttonDelete: {
        backgroundColor: '#ff0000',
        marginHorizontal: 10
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
    textCancelStyle: {
        color: 'black',
        padding: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
  });

export default Group_item