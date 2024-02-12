/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let list = [];

for (let i = 0; i < 10; i++) {
  list[i] = prompt("Insira um item na lista");
}

alert(list);
