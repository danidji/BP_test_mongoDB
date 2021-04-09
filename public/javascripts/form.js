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

form.addEventListener('submit', onclick)



// module.exports = newUser

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

    console.log(myValues)
    return myValues
}

function onclick(e) {
    e.preventDefault()
    const newUser = returnValues()
    console.log(newUser)
}