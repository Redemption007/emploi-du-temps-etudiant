import React, {useState} from 'react';
import { FlatList, Dimensions, Modal, StyleSheet, Pressable, TextInput, Text, SafeAreaView, View } from 'react-native';
import Group_item from '../Components/group';
import Groupe from '../Database/groups'

const Calendars = ({ navigation }) => {

  console.log("Document updating...");
  const groups = new Array(global.database.get("groups")).flat()

  const [modalVisible, setModalVisible] = useState(false);
  let [inputNameGroup, setInputNameGroup] = useState("")
  let [inputGroupUrl, setInputGroupUrl] = useState("")
  let [disableSave, setableSave] = useState(true)

  const change_state = (item) => {
    Groupe.get(item).then(async array_group => {
        const group = array_group[0]
        await Groupe.update_visibility(group)
      })
    setTimeout(() => {
      setableSave(!disableSave)
      setableSave(!disableSave)
    }, 1)
  }


  const del = (item) => {
    Groupe.get(item).then(async array_group => {
        const group = array_group[0]
        await Groupe.remove(group)
      })
      setTimeout(() => {
        setableSave(!disableSave)
        setableSave(!disableSave)
      }, 500)
  }

  const change_text = (text, prop) => {
    switch(prop) {
    case 'url':
      setInputGroupUrl(text)
      break
    case 'name':
    default:
      setInputNameGroup(text)
      break
    }
    if (inputGroupUrl && inputNameGroup) {
      setableSave(false)
    } else {
      setableSave(true)
    }
  }
  const save = async () => {
    console.log('Saving...')
    console.log(`
Nom du nouveau groupe : ${inputNameGroup}
Url du nouveau groupe : ${inputGroupUrl}
    `);
    await Groupe.create({name: inputNameGroup, url: inputGroupUrl, visible: true})
    setModalVisible(!modalVisible)
    setableSave(!disableSave)
    console.log('Saved !');
    return
  }

  const List = () => {

    console.log("groups : ", groups);

    if(groups.length) {
      return (
        <View style={{flex:1}}>
          <SafeAreaView>
            <FlatList data={groups} renderItem={({item}) => <Group_item item={item} update={change_state} suppr={del}/>}/>
          </SafeAreaView>
        </View>
      )
    } else {
      return (
        <Text style={{flex:1}}>Pas de groupe enregistré. Appuyez sur + pour enregistrer un groupe.</Text>
      )
    }
    
    
  }

  
  return (
    <View style={{flex:1}}>
      <List/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>Entrez le nom du groupe :</Text>

            <TextInput
              style={styles.inputText}
              placeholder="Nom du groupe"
              keyboardType="default"
              onChangeText={change => change_text(change, 'name')}
            />

            <Text style={styles.modalText}>Entrez le lien ics :</Text>

            <TextInput
              style={styles.inputText}
              placeholder="https://lien-du-calendrier.ics"
              keyboardType="url"
              onChangeText={change => change_text(change, 'url')}
            />
            
            <View style ={{flexDirection: 'row'}}>

              <Pressable
                style={[styles.rectangularbutton, styles.buttonCancel]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textCancelStyle}>Annuler</Text>
              </Pressable>

              <Pressable
                style={[styles.rectangularbutton, {backgroundColor: disableSave? '#ffffff':'#2196F3'}]}
                onPress={save}
                disabled={disableSave}
                >
                <Text style={styles.textSaveStyle}>Enregistrer</Text>
              </Pressable>
              
            </View>

          </View>
        </View>

      </Modal>

      <Pressable
        style={[styles.roundbutton, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
}
  
export default Calendars

const screen_height = Dimensions.get('window').height
const screen_width = Dimensions.get('window').width

const round_dim = (screen_width*0.2)

const styles = StyleSheet.create({
  inputText: {
    borderColor: '#000000',
    borderWidth: 0.5,
    padding: 5,
    marginVertical: 10
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 70,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
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
  roundbutton: {
    position: 'absolute',
    top: 0.8*screen_height,
    elevation: 2,
    height: round_dim,
    width: round_dim,
    borderTopLeftRadius: round_dim,
    borderTopRightRadius: round_dim,
    borderBottomLeftRadius: round_dim,
    borderBottomRightRadius: round_dim,
    marginHorizontal: '40%',
    marginBottom: 0.5*round_dim
  },
  rectangularbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 50,
    width: 100,
    padding: 5,
    margin: 5,
    alignItems: 'center'
  },
  buttonOpen: {
    backgroundColor: '#ff0000',
  },
  buttonCancel: {
    backgroundColor: '#ffffff',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 70
  },
  textCancelStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 15
  },
  textSaveStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 15
  },
  modalText: {
    marginTop: 10,
    textAlign: 'center',
  }
});
