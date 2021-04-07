var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbFunctions = require('../bdd/database')


/* GET home page. */
router.get('/', function (req, res, next) {

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


    //fonction find de manière asynchrone
    async function asyncCall(db) {
      const data = await dbFunctions.findDocuments(db)

      console.log(data)

      // envoi des résultatsde la requete au navigateur
      res.render('index', {
        title: 'Test gestion BDD via MongoDB'
        , data: data
      });
      client.close()
    }

    asyncCall(db)
  })


});

module.exports = router;





