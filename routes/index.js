var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


/// Code de la doc à jour : https://www.npmjs.com/package/mongodb


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// import { insertDocuments, findDocuments } from '../bdd/database.js'
const dbFunctions = require('../bdd/database')

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mesClients';
// const client = new MongoClient(url);
// ^--Ajout d'option pour empecher l'erreur----v
const client = new MongoClient(url, { useUnifiedTopology: true })
// Use connect method to connect to the server
client.connect(function (err) {


  const db = client.db(dbName);
  assert.strictEqual(null, err);
  console.log('Connected successfully to server');

  dbFunctions.asyncParalel(db, client)


})










// async function asyncParalel(db, client) {
//   console.log('==Exécution parallèle avec await Promise.all==');

//   // Démarre plusieurs tâches en parallèle et on attend que les deux soient finies
//   await Promise.all([
//     insertDocuments(db)
//     , findDocuments(db)
//   ]);


//   client.close()
// }




// //Fonction qui insère des données dans la base
// async function insertDocuments(db) {
//   // Get the documents collection
//   const collection = db.collection('mesClients')

//   console.log('Insertion en cours');

//   // Insert some documents
//   const result = await collection.insertMany([
//     {
//       "nom": "Zoooroooo",
//       "age": 66,
//       "sexe": "h"
//     },
//     {
//       "nom": "luuffy",
//       "age": 50,
//       "sexe": "h"
//     }
//   ])

//   return result
// }
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



