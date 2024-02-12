/*

  Capturar 2 números e fazer as operações matemáticas de soma, subtração
  divisão e resto divisão

  e para cada operação mostrar um alerta com o resultado

*/

let numberOne = Number(prompt("Informe o primeiro número: "));
let numberTwo = Number(prompt("Informe o segundo número: "));

const sum = numberOne + numberTwo;
const subtract = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert("O valor da soma dos números informados é: " + sum);
alert("O valor da subtração dos números informados é: " + subtract);
alert("O valor da multiplicação dos números informados é: " + multiplication);
alert("O valor da divisão dos números informados é: " + division);
alert("O valor do resto da divisão dos números informados é: " + rest);
