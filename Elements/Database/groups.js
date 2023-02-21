/**
 * @class `Groupe` : Classe utilisée pour manipuler les groupes dans la database
 */
export default class Groupe {
    constructor({
        name = 'Nom du groupe',
        url = 'https://',
        visible = true,
    }) {
        this.name = name;
        this.url = url;
        this.visible = visible;
    }

    static async get(props) {

        console.log("Getting groups...");

        let groups = []

        props = new Array(props).flat()
        const db = await global.database.database('groups')

        await db.find({$or: props}, (_err, data) => {
            groups = data
            console.log("groups getted : ", groups)
        })
        return groups
    }

    static async create(props) {
        const db = global.database.database('group')

        exists = await Groupe.get(props)
        if (exists.length) {
            console.log("Le groupe existe déjà !");
            return exists[0]
        }

        newgroup = new Groupe(props)
        global.database.get('groups').push(newgroup)
        await db.insert(newgroup)
        return newgroup
    }

    static async remove(group) {
        const db = global.database.database('group')
        index = global.database.get('group').indexOf({name: group.name, url: group.url, visible: group.visible})
        global.database.groups.slice(index, index+1)
        
        await db.remove({name: group.name, url: group.url, visible: group.visible})

        global.database.update_db('groups')
    }

    static objectAt(obj, array) {
        let i = -1
        array.forEach((item, index) => {
          let count = 0
          const item_values = Object.values(item)
          Object.values(obj).forEach(val => {
            if (item_values.includes(val)) {
                count++
            }
          });
          if (count == Object.values(obj).length) return i = index
        });
        return i
      }

    static async update_visibility(group) {
        const db = global.database.database('group')

        const grp = {_id: group._id, name: group.name, url: group.url}
        index = Groupe.objectAt(grp, global.database.get('group'))
        console.log("Index = ",index);
        console.log("Before : ", global.database.groups[index]);
        global.database.groups[index] = {
            _id: group._id,
            name: group.name,
            url: group.url,
            visible: !group.visible
        }
        console.log("After : ", global.database.groups[index]);

        await db.update(
            {name: group.name, url: group.url},
            { $set: {visible: !group.visible}},
            {returnUpdatedDocs: true}
        )
        console.log('Visibility of ', group.name, ' updated ! Now ', !group.visible);
    }
}
