const novo = require('sequelize')
const novo2 =  new novo('quartos','root','89781258b',{ //criação do banco de dados
    host:'localhost',
    dialect : 'mysql'
});

const quarta = novo2.define('quartas',{

    nome: {
        type: novo.STRING
    },
    idade: {
        type: novo.INTEGER}
}) ;

quarta.sync({force:true}) //só usa uma vez,se não ele re-usa de novo.