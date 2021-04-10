console.log('form.js')

// Je recupère tous les éléments du dom dont j'ai besoin 
const form = document.querySelector('.form')
const mail = document.querySelector(".email")
const password = document.querySelector(".pass")
const firstName = document.querySelector(".prenom")
const lastName = document.querySelector(".nom")
const phoneNumber = document.querySelector(".phone")
const birthDate = document.querySelector(".birth")
const checkButton = document.querySelector(".check")

// const allInput = document.querySelectorAll(".inputForm")
// console.log(allInput)
// JE rajoute un écouteur sur la validation


// /!\ Attention lors de l'appelle d'une fonction dans un event, on ne peut pas utiliser de paramètre ni retourner de valeur 
// On passe donc par la fonction onclick qui appellera elle même la fonction qui retournera des valeurs (returnValues)
form.addEventListener('submit', onclick)




//Quand je valide je récupère la veleur contenur dans les éléments dans un objet que je pourrais exporter
function returnValues() {

    // console.log(mail.value)
    const myValues = {
        email: mail.value
        , password: password.value
        , first_name: firstName.value
        , last_name: lastName.value
        , phone: phoneNumber.value
        , birthday: birthDate.value

    }

    // console.log(myValues)
    return myValues
}

function onclick(e) {
    e.preventDefault()
    const newUser = returnValues()
    // console.log(newUser)
}
// module.exports = newUser