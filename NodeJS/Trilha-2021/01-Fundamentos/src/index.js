const express = require('express'); //atribuindo a lib express a uma variavel

const app = express(); //chamando ela dentro da variavel app

//midware utilizado para informar ao express que estamos trabalhando com JSON
app.use(express.json())

//primeiro parametro é a rota, segundo parametro, request e response
app.get("/courses", (request, response) =>{
    const query = request.query
    console.log(query)
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
})

app.post("/courses", (request, response) =>{
    const body = request.body;
    console.log(body) 
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
})

app.put("/courses/:id", (request,response) =>{
    const params = request.params;
    console.log(params)
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
})

app.patch("/courses/:id", (request,response) =>{
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 3",
        "Curso 4"
    ]);
})

app.delete("/courses/:id", (request, response) =>{
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 4"
    ]);
})

//definindo uma porta onde será hospedada a aplicação
//localhost:3333
app.listen(3333)