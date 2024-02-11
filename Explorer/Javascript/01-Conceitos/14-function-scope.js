// function scope

let subject = "create video";

/* 
  Caso o subject não seja um parâmetro a função irá sobrescrever a variável existente. 
  Porém sendo parâmetro a função irá atuar apenas no seu próprio escopo
*/

function createThink(subject) {
  subject = "study";
  return subject;
}

console.log(createThink(subject));
