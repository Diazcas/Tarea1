var express = require('express');
var app = express();

//middelware
app.use(express.static('public'));

app.listen(process.env.PORT)