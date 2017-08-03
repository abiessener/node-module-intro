console.log('Module Intro');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

var kittens = require('./kittens'); // dot-slash in front tells node to look in the current (server) dir instead of node_modules/

// var kittens is set to whatever kittens.js assigns to module.exports

// log the array of kittens

console.log(kittens);


app.listen(port, function(){
    console.log('listening on port',port);
    
})