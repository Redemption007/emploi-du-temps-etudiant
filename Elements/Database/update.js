import load_Database from './load'

/**
 * Opère les changements demandé sur la database donnée.
 * @param {String} database_name : Nom du fichier dans laquelle la database est stockée.
 * @param {Object} old_document : Ancien document ou Query vers l'ancien document.
 * @param {Object} changes : Nouveau document ou Modification à effectuer.
 * @param {Boolean} one (optionnel) : Ne changera que le premier document à match la Query si sur `True` (valeur par défaut).
 * @returns {Array} Array des documents modifiés.
 */
async function update (
    database_name = new String(),
    old_document = new Object(),
    changes = new Object(),
    one = true
) {
    db = global.database.database(database_name)
    const updated = await db.update(old_document, changes, {multi: !one, upsert: true, returnUpdatedDocs: true})
    return updated
}

module.exports = update

/*

Doit pouvoir ajouter un document         (note, ics)
Doit pouvoir modifier un document        (note, ics, settings)
Doit pouvoir supprimer un document       (note, ics)


Modifications :
    > Vérification de l'existence du document
        -> Si non, création
        -> Si oui, remplacement/ajout

*/
