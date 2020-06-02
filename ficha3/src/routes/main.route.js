const express = require('express');
const router = express.Router();

router.get('/info', function(req, res){
    res.send("Rota info executada com sucesso…");
    console.log("Início da execução da rota info…");
});

router.get('/bemvindo', function(req, res){
    var valor = req.param("nome");
    res.send("Bem vindo, " + valor +"!");
});

router.post('/soma', function(req, res){
    var v1 = req.body.valor;
    var v2 = req.body.valor;

    var resultado = parseInt(v1) + parseInt(v2);

    var soma = {'valor1': v1,
    'valor2' : v2,
    'resultado' : resultado}

    res.send(soma);

});

module.exports = router;