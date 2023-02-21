import Datastore from 'react-native-local-mongodb'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class General_Database {
  constructor() {

    this.settings = [{
                    "dark_theme": false,
                    "langage": "fr",
                    "fullscreen": false,
                    "orientation": "vertical",
                    "orientation_locked": false,
                    "color": "none",
                    "saturday": true,
                    "sunday": true,
                    "sync_calendar_hour": "00:30",
                    "sync_widget_interval": "01:20",
                    "reminder_interval": "12:00"
                }]
    this.notes = [{
                    name: 'Nouvelle note',
                    subject: 'Matière',
                    group: 'Groupe',
                    content: "Penser à ajouter une note !\nPeut être utile pour servir d'agenda ;)",
                    end: false,
                    reminder: false,
                    importance: 0
                }]
    this.groups = []

    this._settings_db = new Datastore({ filename: 'settings', storage: AsyncStorage });
    this._settings_db.loadDatabase();
    this._notes_db = new Datastore({ filename: 'notes', storage: AsyncStorage });
    this._notes_db.loadDatabase();
    this._groups_db = new Datastore({ filename: 'groups', storage: AsyncStorage });
    this._groups_db.loadDatabase();
    
    
    this._settings_db.update(this.settings[0], this.settings[0], {upsert: true});
    this._notes_db.update(this.notes[0], this.notes[0], {upsert: true});
    

    ['settings', 'notes', 'groups'].forEach(database_id => {
      this.update_db(database_id)
    })
  }

  static clean_id(id) {
    
    switch (id.toLowerCase()) {
    case 'settings':
    case 'setting':
    case 'paramètres':
    case 'params':
      return 'settings'
    case 'notes':
    case 'note':
    case 'memo':
    case 'memos':
      return 'notes'
    case 'groupes':
    case 'groupe':
    case 'groups':
    case 'group':
    case 'ics':
      return 'groups'
    }
  }
  
  update_db(identifiant_database = new String()) {
    const id = General_Database.clean_id(identifiant_database)

    database_name = `_${id}_db`
    const db = this[database_name]
    db.find({}, (_err, data) => {
      console.log(id, ' : ', data)
      this[id] = data
    })
    
    return this[id]
  }
  
  get(id) {
    const db_name = General_Database.clean_id(id)
    return this[db_name]
  }

  database(id) {
    const db_name = General_Database.clean_id(id)
    const database_name = `_${db_name}_db`
    return this[database_name]
  }

  clean_database(id) {
    const db_name = General_Database.clean_id(id)
    const database_name = `_${db_name}_db`
    this[database_name].remove({}, { multi: true });
  }

  clean_All() {
    ['settings', 'notes', 'groups'].forEach(element => {
      this.clean_database(element)
    })
    console.log("All databases have been cleared !");
  }
  
}
