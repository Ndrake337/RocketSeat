// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const a = Number(prompt("Insira um número"));
const b = Number(prompt("Insira um número"));

alert(a + b);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

const c = 15;

console.log(typeof c);

if (typeof c === "number") {
  console.log("É um número");
} else {
  console.log("Não é um número");
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const d = "15";

console.log(typeof d);

if (typeof d === "string") {
  console.log("É um string");
} else {
  console.log("Não é um string");
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const e = true;

console.log(typeof e);

if (typeof e === "boolean") {
  console.log("É um booleano");
} else {
  console.log("Não é um booleano");
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const f = Number(prompt("Insira um número"));
const g = Number(prompt("Insira um número"));

alert(f - g);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const h = Number(prompt("Insira um número"));
const i = Number(prompt("Insira um número"));

alert(h * i);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const j = Number(prompt("Insira um número"));
const k = Number(prompt("Insira um número"));

alert(h / i);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const l = Number(prompt("Insira um número"));

l % 2 === 0 ? alert("É um número par") : alert("É um número impar");

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const m = Number(prompt("Insira um número"));

m % 2 === 0 ? alert("É um número impar") : alert("É um número par");
