/*
  FALSY

  Quando um valor é considerado false em contextos onde um booleano é obrigatório (Condicionais e loops)

  false
  0
  -0
  ""
  null
  undefined
  NaN

*/

console.log(false ? "verdadeiro" : "falso");

console.log(0 ? "verdadeiro" : "falso");

console.log(null ? "verdadeiro" : "falso");

/*
  TRUTHY
  Quando um valor é considerado true em contextos onde um booleano é obrigatório (Condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity

*/

console.log(true ? "verdadeiro" : "falso");

console.log([] ? "verdadeiro" : "falso");

console.log(Infinity ? "verdadeiro" : "falso");
