//Recibe cero Parametros
//Variables con const
const ceroParametros = () => {
    const nombre = "Esneyder Briñez Gomez";
    console.log(nombre); // No necesitas los paréntesis aquí
};
ceroParametros()


//Recibe 1 Parametro
const unParametro = (numero) => {
    return numero * numero
}
const resultado = unParametro(10)
console.log("El numero 10 elevado al cuadrado es: ", resultado);


//Recibe dos o mas parametros
const calcularPromedio = (...numeros) => {
    const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return total / numeros.length;
};
const promedio = calcularPromedio(10, 20, 30, 40, 50);
console.log("El promedio de los numeros es:", promedio);


//Variables con let
let sumar = (num1, num2) => {
    return num1 + num2
}

let restar = (num1, num2) => {
    return num1 - num2
}

let multiplicar = (num1, num2) => {
    return num1 * num2
}

let dividir = (num1, num2) => {
    return num1 / num2
}

console.log("Suma: ", sumar(5, 5));
console.log("Resta: ", restar(5, 10));
console.log("Multiplicacion: ", multiplicar(5, 5));
console.log("Division: ", dividir(5, 20));


//Sumar elementos sucesivamente
const sumarElementos = (array) => {
    let suma = 0;
    for (let elemento of array) {
        suma += elemento;
    }
    return suma;
};
const numeros = [1, 2, 3, 4, 5];
const suma = sumarElementos(numeros);
console.log("La suma de los elementos del array es:", suma);


//Metodos propios de JavaScript
//toUpperCase() / toLowerCase()
const minuscula = () => {
    palabraUno = "hola mundo"
    console.log(palabraUno.toUpperCase());
}
minuscula()


const mayuscula = () => {
    const palabraDos = "HOLA MUNDO"
    console.log(palabraDos.toLowerCase());
}
mayuscula()

//Math()
//Area de un Circulo
const areaCirculo = (radio) => Math.PI * Math.pow(radio, 2);
const radio = 5;
const area = areaCirculo(radio);
console.log("El area del circulo con radio", radio, "es:", area);

//Numero Aleatorio 
const generarNumAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const numeroAleatorio = generarNumAleatorio(1, 50);
console.log("Numero aleatorio entre 1 y 100:", numeroAleatorio);