var express = require('express');
var router = express.Router();

// const newUser = require('../public/javascripts/form')



/* get users listing. */
router.get('/', function (req, res, next) {

    // console.log(newUser)
    // console.log(inputForm)
    res.render('addUser', {
        title: 'Inscription'
    });
});
//Requete post => ne s'affiche pas lors de la génération de la page
router.post('/addUser', function (req, res, next) {

    console.log(req)
    res.end()
});


module.exports = router;
// je veux ajouter un utilisateur à ma base de donnée
