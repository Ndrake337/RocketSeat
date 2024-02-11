# Scope

* Escopo determina a visibilidade de alguma variável no JS


# Block statement
```js
//Vamos iniciar um bloco
{
  // Aqui dentro é um bloco e posso colocar qualquer código nele
}//Aqui Fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
// hoisting
console.log('> existe x antes do bloco ? ', x)

{
  var x = 0
}

console.log('> existe x depois do bloco ? ', x)

```


## let e const 
```js
// const e  let são locais e só funcionam no escopo onde foram criadas
console.log('> existe y antes do bloco ? ', y)

{
  let y = 0
}

console.log('> existe y depois do bloco ? ', y)

```

## Para criar nomes

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
  * Iniciar com esses carateres especiais: $ _
  * Iniciar com letras
  * Colocar acentos
  * Letras maiúsculas e minúsculas fazem diferença

- Não Posso:
  * Iniciar com números
  * Colocar espaços vazios no nome

- Ideal
  * Criar nomes que façam sentido
  * Que explique o que que a variável é ou faz 
  * camelCase
  * snake_case
  * Escrever em inglês