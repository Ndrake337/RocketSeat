/**
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário

 */

function soma(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

let numberOne = Number(prompt("Informe o primeiro numero"));
let numberTwo = Number(prompt("Informe o segundo numero"));

let resultado = soma(numberOne, numberTwo);

alert(resultado);
