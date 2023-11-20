// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
let number = 3;

let rest = number % 2;

if (rest === 0) {
  console.log("el número es par");
} else {
  console.log("el número es impar");
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function comparador(num1, num2) {
  if (num1 > num2) {
    console.log(`El número ${num1} es mayor que el número ${num2}`);
  } else if (num1 === num2) {
    console.log("Los números son iguales");
  } else {
    console.log(`El número ${num2} es mayor que el número ${num1}`);
  }
}

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

comparador(3, 4);

function multiploDe5(num) {
  if (num % 5) {
    console.log("El número no es multiplo de 5");
  } else {
    console.log("El número es multiplo de 5");
  }
}

multiploDe5(30);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function desdeEl0(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

desdeEl0(5);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function puntoCinco(num, char) {
  for (let i = 1; i <= num; i++) {
    console.log(char);
  }
}

puntoCinco(4, "hola");

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function puntoSeis(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("El elemento " + array[i] + " está en la posición " + i);
  }
}

let myArray = [1, 2, 3, 4, 5, 6];

puntoSeis(myArray);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function puntoSiete(array) {
  for (let i = 0; i < array.length; i++) {
    if (i == 4) {
      continue;
    } else {
      console.log("Posición: " + i + " Valor: " + array[i]);
    }
  }
}

let segundoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

puntoSiete(segundoArray);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function puntoOcho(array, num) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
}

let num = 4;

let tercerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
puntoOcho(tercerArray, num);
