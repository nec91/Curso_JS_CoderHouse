
//constructor de usuarios
class User {
    constructor(user, password, name, lastName, age, gender, id) {
        this.user = user
        this.password = password
        this.name = name
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.id = id
    }
}

//usuarios ya predefinidos
const user1 = new User("omar42", "qwerty25", "Omar", "Perez", 85, "male", 1)
const user2 = new User("marta55", "qwerty26", "Marta", "Lopez", 70, "female", 2)
const user3 = new User("pedro44", "qwerty27", "Pedro", "Martinez", 55, "male", 3)
const user4 = new User("alma14", "qwerty25", "Alma", "Iglesias", 60, "female", 4)
const user5 = new User("belen43", "qwerty28", "Belen", "Coleccia", 59, "female", 5)
const user6 = new User("Julio85", "qwerty29", "Julio", "Rodriguez", 57, "male", 6)
const user7 = new User("sandra77", "qwerty26", "Sandra", "Krivich", 52, "female", 7)

//base de datos como array
let userDB = [user1, user2, user3, user4, user5, user6, user7]

//array vacio donde se almacena el id del usuario loggeado
let userLoggedId = []

//funcion para agregar un usuario

document.addEventListener("DOMContentLoaded", function () {
    const addForm = document.getElementById("addForm")
    const addSubmit = document.getElementById("addSubmit")

    addSubmit.addEventListener("click", function (e) {
        e.preventDefault()
        const user = document.getElementById('user').value.toLocaleLowerCase().trim()
        const password = document.getElementById('password1').value
        const password2 = document.getElementById('password2').value
        const name = document.getElementById('name').value.trim()
        const lastName = document.getElementById('lastName').value.trim()
        const age = parseInt(document.getElementById('age').value)
        const genderSelect = document.getElementById('gender')
        const gender = genderSelect.value === "m" ? "male" : "female"

        const userExists = userDB.some((i) => i.user === user)
        const userError = userExists ? "El nombre de usuario ya existe, por favor intente nuevamente." : ""

        const emptyFields = user === "" || password === "" || password2 === "" || name === "" || lastName === "" || isNaN(age)
        const emptyFieldsError = emptyFields ? "Ingrese un valor correcto en todos los campos." : ""

        const passwordsMatch = password === password2
        const passwordMatchError = passwordsMatch ? "" : "Las contraseñas no coinciden. Por favor, intente nuevamente."

        if (userError || emptyFieldsError || passwordMatchError) {
            console.log(userError || emptyFieldsError || passwordMatchError)
            return
        }

        let id = userDB.length + 1
        let newUser = new User(user, password, name, lastName, age, gender, id)
        userDB.push(newUser)

        console.log("Usuario creado correctamente.")
        // window.location.href = "url_del_nuevo_formulario.html" // Cambia esto por la URL correcta


    })

})




//funcion para loggearse


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm")
    const loginSubmit = document.getElementById("loginSubmit")

    loginSubmit.addEventListener("click", function () {
        const username = document.getElementById("username").value.trim().toLowerCase()
        const password = document.getElementById("password").value
        const logResult = userDB.find(i => i.user === username)

        const userError = logResult ? "" : "Usuario incorrecto, intente nuevamente."
        const passError = logResult && logResult.password !== password ? "Contraseña incorrecta." : ""

        if (userError || passError) {
            console.log(userError || passError)
        } else {
            console.log(`Bienvenid@ ${logResult.name} ${logResult.lastName}`)
            userLoggedId.push(logResult.id)

            sessionStorage.setItem("userLoggedId", JSON.stringify(userLoggedId))
        }
        window.location.href = "url_del_nuevo_formulario.html" // Cambia esto por la URL correcta
    })
})


// function logIn() {
//     let userLog = prompt("Bienvenido, ingrese su usuario.").toLocaleLowerCase().trim()
//     const logResult = userDB.find(i => i.user === userLog)

//     if (logResult === undefined) {
//         console.log("Usuario incorrecto, intente nuevamente.")
//         return
//     } else {
//         console.log("check")
//     }
//     let passLog = prompt("Ingrese su contraseña")
//     if (logResult.password != passLog) {
//         console.log("Contraseña incorrecta.")
//         return
//     } else {
//         console.log(`Bienvenid@ ${logResult.name} ${logResult.lastName}  `)
//         userLoggedId = []
//         return userLoggedId.push(logResult.id)
//     }
// }

//funcion calculo para genero masculino
function male() {
    let user = userDB[userLoggedId - 1]
    let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"))
    if (isNaN(aportes)) {
        console.log("Ingrese un dato válido")
    } else if (user.age < 65) {
        let restaEdad = 65 - user.age
        console.log(`Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 65 años. Restan: ${restaEdad} año/s.`)
    } else if (aportes < 30) {
        let restaAportes = 30 - aportes
        console.log((`Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`))
    } else {
        return console.log(`Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`)
    }
}


//funcion calculo para genero femenino
function female() {
    let user = userDB[userLoggedId - 1]
    let aportes = parseInt(prompt("¿Cuantos años de aportes tiene?"))
    if (isNaN(aportes)) {
        console.log("Ingrese un dato válido")
    } else if (user.age < 60) {
        let restaEdad = 60 - user.age
        console.log(`Requisitos de jubilación insuficioentes. La edad mínima necesaria es de 60 años. Restan: ${restaEdad} año/s.`)
    } else if (aportes < 30) {
        let restaAportes = 30 - aportes
        console.log((`Requisitos de jubilación insuficioentes. Año/s restante/s de aportes: ${restaAportes}`))
    } else {
        return console.log(`Felicidades ${user.name} ${user.lastName}, cumple todos los requisitos para jubilarse.`)
    }
}

//funcion que combina calculo de ambos generos y ejecuta dependiendo del mismo
function calculator() {
    let user = userDB[userLoggedId - 1]
    if (user.gender == "male") {
        male()
    } else {
        female()
    }
}

//funcion para iniciar el programa
function start() {
    let welcome = confirm(`¡Bienvenido! ¿Usted se encuentra registrado? Responda "Aceptar" por si, o "Cancelar" por no. `)
    console.log(welcome)
    switch (welcome) {
        case false:
            alert("Regístrese a continuación")
            addUser()
            break
        case true:
            logIn()
        case true:
            calculator()
            break
    }
}
