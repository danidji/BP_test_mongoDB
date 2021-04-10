var express = require('express');
var router = express.Router();


// => regarder le fonctionnement du body-parser qui semble etre lié à la méthode post 
// const bodyParser = require('body-parser')
//                             v-- /!\ deprecated
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// const newUser = require('../public/javascripts/form')



/* get users listing. */
router.get('/', function (req, res, next) {

    // console.log(req)
    res.render('addUser', {
        title: 'Inscription'
    });
    next()
    // res.send('GET request ');
});
//Requete post => ne s'affiche pas lors de la génération de la page
router.post('/addUser', function (req, res) {

    console.log(req)
    res.send('POST request')
});


module.exports = router;
// je veux ajouter un utilisateur à ma base de donnée
