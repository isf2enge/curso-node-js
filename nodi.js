const htm = require('express')
const html = htm()

html.get('/',function(req,res){

    res.sendFile( __dirname + '/arquivo/arquivo.html')
})

html.listen(8081,function(){

    console.log('Programa rodando!')
})