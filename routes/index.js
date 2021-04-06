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

  // insertDocuments(db, client)

  // findData(dbName)

  findDocuments(db)


})

//Fonction qui insère des données dans la base
async function insertDocuments(db, client) {
  // Get the documents collection
  const collection = db.collection('mesClients')

  // Insert some documents
  const result = await collection.insertMany([
    {
      "nom": "Test1",
      "age": 66,
      "sexe": "h"
    },
    {
      "nom": "Test2",
      "age": 66,
      "sexe": "h"
    }
  ])
  client.close()

  return result
}

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




//// Test find() avec async https://www.mongodb.com/what-is-mongodb >> 3 Create a query
async function findDocuments(db) {
  const collection = db.collection('mesClients')

  const docs = await collection.find({ age: { $gt: 40 } }).toArray()

  console.log('Found the following records')
  console.log(docs)

  return docs
}