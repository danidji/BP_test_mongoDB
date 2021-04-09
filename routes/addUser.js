var express = require('express');
var router = express.Router();

// const newUser = require('../public/javascripts/form')

/* GET users listing. */
router.get('/', function (req, res, next) {

    // console.log(newUser)

    // console.log(inputForm)
    res.render('addUser', {
        title: 'Inscription'
    });
});

module.exports = router;
// je veux ajouter un utilisateur à ma base de donnée
