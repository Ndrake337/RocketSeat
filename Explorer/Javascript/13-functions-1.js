// function expression
// function anonymous

// parâmetros (parameters)
const sum = function (number1, number2) {
  console.log(number1 + number2);
  return number1 + number2;
};

sum(2, 3); // arguments - argumentos

let number1 = 34;
let number2 = 25;

console.log(`o numero 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);

console.log(`a soma é ${sum(number1, number2)}`); //resultado: 59\n a soma é undefined
