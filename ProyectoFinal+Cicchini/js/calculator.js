const calculatorForm = document.getElementById("calculatorForm")

const storedUserDB = JSON.parse(localStorage.getItem("userDB"))
const userLoggedId = JSON.parse(sessionStorage.getItem("userLoggedId"))
const userLogged = storedUserDB.find(i => i.id === userLoggedId)

const gender = userLogged.gender === "male" ? "Masculino" : userLogged.gender === "female" ? "Femenino" : ""

const hiUser = document.getElementById("hiUser")
hiUser.innerHTML = `<h4>Hola! ${userLogged.name} ${userLogged.lastName} </h4>`

const ageForm = document.getElementById("ageLoged")
ageForm.innerHTML = `<p>Su edad: ${userLogged.age} </p>`

const genderForm = document.getElementById("gendderLoged")
genderForm.innerHTML = `<p>Género: ${gender} </p>`
console.log(userLogged)



const handleCalculator = e => {
    e.preventDefault()

    const yearsWorked = parseInt(document.getElementById("worked").value)
    const workedError = isNaN(yearsWorked) || yearsWorked === "" //eventito

    const genderNeedAge = userLogged.gender === "male" ? 65 : userLogged.gender === "female" ? 60 : null

    const ageInsufficient = userLogged.age < genderNeedAge
    const yearsInsufficient = yearsWorked < 30


    const errorMessage =
        ageInsufficient ? `Requisitos de jubilación insuficientes. Su edad mínima necesaria es de ${genderNeedAge} años. Restan: ${genderNeedAge - userLogged.age} año/s.` :
            yearsInsufficient ? `Requisitos de jubilación insuficientes. Año/s restante/s de aportes: ${30 - yearsWorked}` :
                `Felicidades ${userLogged.name} ${userLogged.lastName}, cumple todos los requisitos para jubilarse.`

    console.log(errorMessage)


}

calculatorForm.addEventListener("submit", handleCalculator)











// //funcion calculo para genero masculino
// function male() {
//     let user = userDB[userLoggedId - 1]
//     let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"))
//     if (isNaN(aportes)) {
//         console.log("Ingrese un dato válido")
//     } else if (user.age < 65) {
//         let restaEdad = 65 - user.age
//         console.log(`Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 65 años. Restan: ${restaEdad} año/s.`)
//     } else if (aportes < 30) {
//         let restaAportes = 30 - aportes
//         console.log((`Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`))
//     } else {
//         return console.log(`Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`)
//     }
// }


// //funcion calculo para genero femenino
// function female() {
//     let user = userDB[userLoggedId - 1]
//     let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"))
//     if (isNaN(aportes)) {
//         console.log("Ingrese un dato válido")
//     } else if (user.age < 60) {
//         let restaEdad = 60 - user.age
//         console.log(`Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 60 años. Restan: ${restaEdad} año/s.`)
//     } else if (aportes < 30) {
//         let restaAportes = 30 - aportes
//         console.log((`Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`))
//     } else {
//         return console.log(`Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`)
//     }
// }

// //funcion que combina calculo de ambos generos y ejecuta dependiendo del mismo
// function calculator() {
//     let user = userDB[userLoggedId - 1]
//     if (user.gender == "male") {
//         male()
//     } else {
//         female()
//     }
// }

// //funcion para iniciar el programa
// function start() {
//     let welcome = confirm(`¡Bienvenido! ¿Usted se encuentra registrado? Responda "Aceptar" por si, o "Cancelar" por no. `)
//     console.log(welcome)
//     switch (welcome) {
//         case false:
//             alert("Regístrese a continuación")
//             addUser()
//             break
//         case true:
//             logIn()
//         case true:
//             calculator()
//             break
//     }
// }
