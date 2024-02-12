# O que aprendemos?

Muita lógica e algoritmos

- sintaxe e boas práticas
    
    ```jsx
    // ponto e vírgula é facultativo
    const myConst = "constante"
    
    // escrever com calmelCase
    const myConst2 = "constante2"
    
    // procurar escrever código em inglês 
    // para treinar, aumentar as oportunidades futuras
    function doSomething(myArgument) {}
    ```
    
- variáveis
    
    ```jsx
    const
    let
    var
    ```
    
- tipos de dados
    
    ```jsx
    String 
    Number
    Boolean
    undefined  
    null
    ```
    
- estrutura de dados
    
    ```jsx
    // Array
    const myArray = [1, 2, "a", "b", true]
    
    // Object
    const myObject = { property: "value" }
    ```
    
- funções
    
    ```jsx
    // 1. Criação e tipos de funções
    // named
    function myFunction() {}
    
    // Anonymous
    const myFunction = function() {}
    
    // Arrow
    const myFunction = () => {}
    
    // arguments & return
    function sum(a, b) {
    	return a + b
    }
    
    const sum = (a, b) => a + b
    
    // 2. Excecução
    myFunction()
    sum(1, 2)
    ```
    
- fluxo da aplicação
    
    ```jsx
    // if, else if, else
    const isRainning = true
    if (isRainning) {
    	alert("Está chovendo, pega o guarda chuvas 🌧")
    } else {
    	alert("Dia limpo ⛅️")
    }
    
    // switch
    const water = "com gás"
    
    switch(water) {
    	case "com gás": 
    		alert("Essa água é com gás")
    		break
    	case "sem gás":
    		alert("Essa água é sem gás")
    		break
    	case "da fonte":
    		alert("Água fresquiha da fonte")
    		break	
    	default:
    		alert("cadê minha água?")
    }
    ```
    
- estrutura de repetição
    
    ```jsx
    // while
    let play = true
    while(play) {
    	// fazer algo até o play ser falso
    	// criar uma lógica para o play se tornar falso
    	// se não, loop eterno
    }
    
    // for (tradicional)
    let text = "abc"
    for (let i = 0; i < text.length; i++){
    	alert(text[i])
    }
    
    // for..of
    for (let char of text) {
    	alert(char)
    }
    ```
    
- operadores
    
    ```jsx
    () // group operator - agrupamento
    
    // matemáticos
    * // multiplicação
    ** // exponeciação
    / // divisão
    % // resto da divisão
    + // soma
    - // subtração
    
    // lógicos
    && // E lógico 
    || // OU lógico
    ! // Não lógico
    
    // comparação - relacional
    > // maior
    < // menor
    >= // maior igual
    <= // menor igual
    == // igualdade
    === // igual no valor e do mesmo tipo (estritamente igual)
    != // desigualdade
    !== // diferente do valor ou do tipo (estritamente diferente)
    
    // Atribuição
    = // atribuição de valor
    *= // multiplicação e atribuição de valor 
    /= // divisão e atribuição de valor
    += // soma e atribui valor
    -= // diminui e atribui
    
    // outros operadores/expressões
    
    typeof // tipo do dado
    ++ // incremento
    -- // decremento
    {} // objeto vazio ou bloco de código
    [] // array vazio
    , // separa elementos de um array, objeto ou criação de multiplas variáveis
    ```
    

# Próximos passos

Fazer os desafios e quizzes

Revisar sempre que perceber que não entendeu algo, ou não conseguiu resolver o desafio, pois:

1. Revisão é o caminho pra entender algo que ainda não foi compreendido
2. Algumas vezes a resposta está em algo que já foi falado, mas passou desapercebido nas primeiras vezes

Caso deseje saber mais JS, dê uma olhada nos conteúdos de JavaScript do Discover, pois lá você poderá aprender por **conceitos** *learn by concepts*