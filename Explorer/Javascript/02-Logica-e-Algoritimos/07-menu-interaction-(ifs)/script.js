/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let list = [];
let close = false;

let option = 0;

while (Number(option) != 3) {
  option = prompt(`
  Olá usuário! Digite o número da opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa

  --- 
  `);

  if (Number(option) === 1) {
    let value = prompt("informe o valor que será cadastrado: ");
    list.push(value);
  } else if (Number(option) === 2) {
    if (list.length === 0) {
      alert("Não existem itens cadastrados");
    } else {
      alert(list);
    }
  } else {
    if (Number(option) !== 3) {
      alert("escolha uma opção valida");
    } else {
      alert("tchau");
    }
  }
}
