// Importando o Express
//const express = require("express")
// Iniciando o Express 
import express from 'express'
// Importando o Controller de Cliente (aonde estão as rotas)
import ClienteController from './controllers/ClienteController.js'
import ProdutoController from './controllers/ProdutoController.js'
import PedidoController from './controllers/PedidoCOntroller.js '
// Importando o arquivo de coneção com o banco
import connection from './config/sequelize-config.js'

// Realizando a conexão com o banco de dados
connection.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!")
    })
    .catch((error) => {
        console.error(`Erro ao conectar com o banco de dados:", ${error}`);
    });

const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Ativando o uso das ROTAS
app.use("/" , ClienteController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})





// ROTA PEDIDOS
app.use("/", PedidoController)
app.use("/", ProdutoController)

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})