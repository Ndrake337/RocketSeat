/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qual o nome do aluno: ");

let firstGrade = Number(prompt("Informe a primeira nota do aluno: "));
let seccondGrade = Number(prompt("Informe a segunda nota do aluno: "));
let thirdGrade = Number(prompt("Informe a terceira nota do aluno: "));

let avg = (firstGrade + seccondGrade + thirdGrade) / 3;

const result = avg > 6;

if (result) {
  alert(`O Aluno ${student} foi aprovado com média ${avg}`);
} else if (avg < 3) {
  alert("Reprovado");
} else {
  alert(
    student + " estude para sua prova de recuperação! Sua média foi de: " + avg
  );
}
