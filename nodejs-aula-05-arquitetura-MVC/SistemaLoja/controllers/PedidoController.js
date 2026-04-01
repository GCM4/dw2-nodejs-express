//Importando o Express com ES6 Modules
import express from 'express';
// Método Router do Express para criar rotas de aplicação
const router = express.Router();

router.get("/pedidos",function(req,res){
    const pedidos = [
        {numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})
// Exportando o módulo para usá-lo em outro arquivo
export default router;