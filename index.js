var express = require('express');
var app = express();

//middelware
app.use(express.static('public'));

// app.listen(8888, function(){
//     console.log('se levanto el server en el puerto 8888')
// })