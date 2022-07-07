console.log("hola")

// LAS  FUNCIONES POR DECLARACIÓN PUEDNE SER LLAMADAS DESDE CUALQUIER AMBITO DEL ARCHIVO

console.log(saludar("Fernando", "Mendez"))

//
// let numeros = [1, 2, 3, 4, 5, 6, 7]


// let acc = 0

// for(let i = 0; i < numeros.length; i++){

//     acc = acc + numeros[i]   
//     console.log(acc)
// }

// console.log(acc)


// FUNCIONES

// function por declaración

function cartelDeAviso(){
    alert("NO PODÉS ENTRAR A MI SITIO WEB")
}

// llamado de funcion (ejecución) = (nombre del identificador) cartelDeAviso + () paréntesis === cartelDeAviso()

function sumar (){
    console.log(5 + 5)
}

// EL VALOR PREDETERMINADO DE UNA FUNCIÓN ES undefined, si no tiene return
// si tiene return y es undefined, hay un problema

console.log(sumar())

//las funciones pueden recibir parámetros, los parámetros son variables locales que representan a los datos con los que vamos a trabajar

function saludar (nombre, apellido){
    return `¡Hola ${nombre} ${apellido}! Bienvenido/a :D` // las funciones pueden retornar (return) datos
}

// Así se ejecuta una función y se ve su valor (con un console.log)
// así es cómo se agregan los argumentos, que son los datos que precisa la funcion que tiene parámetros


console.log(saludar("Mitchell", "Davila"))
console.log(saludar("Ana Paula", "Rosaschi"))

// SCOPE 

// VARIABLE GLOBAL

const darkMode = false

console.log(darkMode)

function modoOscuro(){
    return darkMode
}

// VARIABLES LOCALES

function modoClaro(){

    const modeClaro = true
    return modoClaro
}

modoClaro()

const modeClaro = true

console.log(modeClaro)

// funciones anónimas || no tienen un identificador, que se llaman o ejecutan con el nombre de la variable + ()

const calcularAreaDelTriangulo = function(base,altura){    
    return base*altura / 2
}

console.log(calcularAreaDelTriangulo(3, 6))
console.log(calcularAreaDelTriangulo(10, 20))

// arrow function ES6 / FUNCIONES FLECHA

//let ---> reasignación de valores y no permite la redeclaración
// const ---> no permite la reasignación ni la redeclaración

// FUNCION FLECHA CON RETORNO EXPLÍCITO

const comprobarContrasenia = (contrasenia) => {
    if(contrasenia.length >= 10){
        return true
    } else {
        return false
    }
}

// console.log(comprobarContrasenia("pepito123"))

// NO PUEDO USAR RETURN FUERA DE UNA FUNCIÓN. EJ:

// if ("pepito123".length >= 10){
//     return true
// } else {
//     return false
// }

// FUNCION FLECHA RETORNO IMPLÍCITO

const checkearContrasenia = (contrasenia) => contrasenia.length >= 10

console.log(checkearContrasenia("CONtraSeñaMuySegura1093"))

console.log("CONtraSeñaMuySegura1093".length >= 10)

// Función que verifique si dos argumentos tienen el mismo largo. (.length)

// dato1 = prompt("Ingrese primer cadena:");
// dato2 = prompt("Ingrese segunda cadena:");

function comparacion(dato1, dato2){
    if(dato1.length == dato2.length){
        console.log("La longitud de las dos cadenas es igual")
    } else {
        console.log("La longitud de las dos cadenas es distinta")
    }
}

const argumentos=(argumento1,argumento2)=>{
    if (argumento1.length == argumento2.length){
        return `Si tienen el mismo largo`
    } else{
        return `No, no tienen el mismo largo`
    }
}

// OPERADOR DE ASIGNACIÓN = ASIGNAR UN DATO
// ESTO (VALE) ESTA COSA

//OPERADOR DE COMPARACIÓN: ==, ===, !=, !== X + 4 = 5 ---> 1 + 4 = 5 ---> 5 = 5
// 5 == 5, 5 === 5

const largoElementos = (elemento1, elemento2) => elemento1.length == elemento2.length


const comparaDatos = (dato1,dato2) => dato1.length == dato2.length

console.log(comparaDatos("123","456"))

// FUNCION CALLBACK

const gritar = (str) => {
    return str.toUpperCase()
}

const exclamarGritando = (funcion) => {
    return `¡¡¡¡${funcion}!!!!`
}

console.log(exclamarGritando(gritar("Diana")))