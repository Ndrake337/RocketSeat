## PROPRIEDADES FUNDAMENTAIS

Todo o grid é composto de 2 principais grupos:
`container: o pai` e `itens: o(s) filhos`

---
### CONTAINER (pai)

- display: grid;
- grid-template; (short hand)
  - grid-template-columns;
  - grid-template-rows;
  - grid-template-areas;
- gap

---
### PROPRIEDADES DE ALINHAMENTO

Existem 9 propriedades fundamentais

**6 aplicadas em container**
`align-content`
`justify-content`
`place-content`

`align-items`
`justify-items`
`place-items`

**3 aplicadas em items**
`align-self`
`justify-self`
`place-self`


Então podemos separar em 3 grupos:
`align` `justify` `place` 

E cada um deles irá observar ou o:
- conteúdo deo elemento `content`
- itens do elemento `items`
- o próprio elemento `self`

#### Content
Muda a posição dos elementos em um determinado eixo
`align` -> eixo Y
`justify` -> eixo X
`place` -> eixo X e Y

#### Items
Remove a largura automática de um elemento para um eixo
`align` -> eixo Y
`justify` -> eixo X
`place` -> eixo X e Y

#### Self
Realiza a mesma função do Items, porém para um elemento especifico
`align` -> eixo Y
`justify` -> eixo X
`place` -> eixo X e Y

---
