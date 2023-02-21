export default class Note {
    constructor({
        name = 'Nouvelle note',
        subject = 'Matière',
        group = 'Groupe',
        content = "Contenu",
        end = false,
        reminder = false,
        importance = 0
    }) {
        this.name = name;
        this.subject = subject;
        this.group = group;
        this.content = content;
        this.end = end;
        this.reminder = reminder;
        this.importance = importance;
    }
    
    static async create(params) {
        const db = global.database.database('notes')
        
        newnote = new Note(params)
        db.insert(newnote)

        global.database.get('notes').push(newnote)
        
        return newnote
    }
    
    async remove(note_params) {
        const db = global.database.database('notes')
        
        db.remove(note_params)
    
        global.database.update_db('notes')
    }
    
    async update(properties) {
        const db = global.database.database('notes')
        
        const updated = await db.update(
            {
                name: this.name,
                subject: this.subject,
                group: this.group,
                content: this.content,
                end: this.end,
                reminder: this.reminder,
                importance: this.importance
            },
            { $set: properties},
            {returnUpdatedDocs: true}
        )

        global.database.update_db('notes')
        
        return updated
    }
}
