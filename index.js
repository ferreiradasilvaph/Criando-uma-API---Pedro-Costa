// utilizando biblioteca exoress com modulo require
const express = require('express');
// criando um servidor que recebe a biblioteca
const server = express();
// hospedando objeto json
const filmes = require('./src/data/filmes.json')

// criando requisição get dentro do servidor com uma função anônima que recebe parâmetros de requisição e resposta.
server.get('/filmes', (req , res) =>{
    // retorna a resposta em formato json atribuindo o objeto hospedado na const filmes
    return res.json(filmes)
})
// porta que o servidor está escutando
server.listen(3000, () => {
    // comando console.log para testar a funcionalidade da API.
console.log("servidor esta funcionando...");
})
