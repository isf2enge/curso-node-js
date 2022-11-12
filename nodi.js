const novo  = require('sequelize');
const novo2 =  new novo('quarto','root','89781258b',{ //criacao do banco

    host:'localhost',
    dialect: 'mysql'
});

const conjunto = novo2.define('conjuntos',{
    nome : {
        type : novo.STRING
    },
    idade : {
        type: novo.INTEGER
    }
});


conjunto.create({ nome: 'Julio',idade: '25'}); //para inserir dados na tabela