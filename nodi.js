const linki = require('express')
const linkae = linki() //criação do servidor

linkae.get('/',function(req,res){
    res.send('Está tudo ok')
})


linkae.listen(8081,function(){ //função para ativar a porta
    console.log('Programa funcionando.') 

})