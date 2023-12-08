const express = require('express');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/filmes', (req , res) =>{
    return res.json(filmes)
})
// porta que o servidor está escutando
server.listen(3000, () => {
console.log("servidor esta funcionando...");
})