//ARRAYS
//ejercicio1 
let arrayVacio = [];

//ejercicio 2  
// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//ejercicio 3 
// Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0, 2, 4, 6, 8];
//ejercicio 4 
// Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [
    [0, 1, 2],
    ['a', 'b', 'c']

];

//FUNCIONES
//ejercicio 5 Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
function suma(num1, num2) {
    return num1 + num2;
}

//ejercicio 6   
// Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

function potenciacion(a, b) {
    return a ** b;
}

//ejercicio 7 
// Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
function separarPalabras(texto) {
    return texto.split(' ');
}

//ejercicio 8 Crea la función repetirString que acepte como argumento un string y un número y 
// devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

function repetirString(texto, num) {
    return texto.repeat(num);
}

//ejercicio 9 
// Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

//ejercicio 10
// mezcla de arrays  y funciones Crear la función ordenarArray que acepta como 
// argumento un array de números y devuelva un array ordenado de menor a mayor

function ordenarArray (numeros) {
    return numeros.sort((a, b) => a - b);
}

//ejercicio 11
// Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

function obtenerPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

//ejercicio 12 
// Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

function pintarArray(array) {
    return '[' + array.join(', ') + ']';
}

//ejercicio 13 
// Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array

function arrayMapi(array, funcion) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(funcion(array[i]));
    }
    return result;
}

//Ejercicio 14 
// Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
function eliminarDuplicados(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (!resultado.includes(array[i])) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

//ITERACIONES PROYECTO
//Ejercicio 15  Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//ejercicio 16 
// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ['Hola', 'Mundo'];

//ejercicio 17 
// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//ejercicio 18 
// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [
    [756, 'nombre'],
    [225, 'apellido'],
    [298, 'direccion']
];

//ejericio  19 
// Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
function multiplicacion(a, b) {
    return a * b;
}

//ejercicio 20  
// Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(a, b) {
    return a / b;
}

//ejercicio 21 
// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//ejercicio 22 
// Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación
//  (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

let arrayFunciones = [suma, resta, multiplicacion];

//Mezclando arrays y funciones

//ejercicio 23 Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
function ordenarArray2(numeros) {
    return numeros.sort((a, b) => b - a);
}

//ejercicio 24  Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

function obtenerImpares(numeros) {
    let impares = [];
    for (let i = 0; i < numeros.length;  i++) {
        if (numeros[i] % 2 !== 0){
         impares.push(numeros[i])
        }
    }

    return impares;
}

//ejercicio 25 Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(numeros) {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma = suma + numeros[i]
    }
    
    return suma;
}

//ejercicio 26 Crear la función multiplicarArray que acepte como argumento un array numérico y 
// devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
function multiplicarArray(numeros) {
    let multiplicar = 1;
    for(let i = 0; i < numeros.length; i++){
        multiplicar = multiplicar * numeros[i];
    }
    return multiplicar;
}