const MongoClient = require('mongodb').MongoClient

const dbFunctions = {
    insertDocument: async function (db) {
        const collection = db.collection('mesClients')

        // Insert some documents
        const result = await collection.insertOne(
            {
                "nom": "Zoooroooo",
                "age": 66,
                "sexe": "h"
            }
        )

        return result
    },
    //Fonction qui insère plusieurs données dans la base
    insertManyDocuments: async function (db) {
        // Get the documents collection
        const collection = db.collection('mesClients')

        // Insert some documents
        const result = await collection.insertMany([
            {
                "nom": "Zoooroooo",
                "age": 66,
                "sexe": "h"
            },
            {
                "nom": "luuffy",
                "age": 50,
                "sexe": "h"
            }
        ])

        return result
    },
    //// Test find() avec async https://www.mongodb.com/what-is-mongodb >> 3 Create a query
    findDocuments: async function (db) {
        const collection = db.collection('mesClients')

        const docs = await collection.find({}).toArray()

        console.log('Found the following records')
        // console.log(docs)

        return docs
    },

    updateOneDocument: async function (db) {
        const collection = db.collection('mesClients')

        const result = await collection.updateOne(
            { nom: 'Zoooroooo' }
            , {
                $set: { nom: 'luffyyy' }
            }
        )
        return result
    },

    deleteDocuments: async function (db) {
        const collection = db.collection('mesClients')

        // DeleteOne est préféré à remove
        const result = await collection.deleteOne({ nom: "Zoooroooo" })
        // console.log('result : ' + result)
        return result
    },

    asyncParalel: async function (db, client) {
        console.log('==Exécution parallèle avec await Promise.all==');

        // Démarre plusieurs tâches en parallèle et on attend que les deux soient finies
        const data = await Promise.all([
            // this.insertDocument(db)
            // this.insertManyDocuments(db)
            // this.deleteDocuments(db)
            // this.updateOneDocument(db)
            this.findDocuments(db)
        ]);

        console.log(data)

        client.close()
        return data
    }
}

module.exports = dbFunctions

// //// Test find() avec async https://www.mongodb.com/what-is-mongodb >> 3 Create a query
// async function findDocuments(db) {
//   const collection = db.collection('mesClients')

//   console.log('Recherche en cours');
//   const docs = await collection.find({ $or: [{ nom: "Zoooroooo" }, { nom: "luuffy" }] }).toArray()

//   console.log('Found the following records')
//   console.log(docs)

//   return docs
// }

// ///test find sans async
// //Fonction qui retourne les clients ayant +40ans
// function findData(dbName) {
//   const db = client.db(dbName);

//   //Exemple de requête find() : http://mongodb.github.io/node-mongodb-native/3.6/api/BulkOperationBase.html#find

//   let collection = db.collection('mesClients')
//   // console.log(collection)

//   //http://mongodb.github.io/node-mongodb-native/3.6/api/Cursor.html#toArray
//   //                   ^-- Doc toArray() --v
//   collection.find({ age: { $gt: 40 } }).toArray(function (err, docs) {
//     if (err) {
//       console.log(err)
//       throw err
//     }
//     //les données de la requete sont retournées sous forme de tableau dans 'docs'
//     //            v
//     console.log(docs)
//   })
//   client.close()
// }

