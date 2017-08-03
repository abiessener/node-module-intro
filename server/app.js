console.log('Module Intro');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

var kittens = require('./kittens'); // dot-slash in front tells node to look in the current (server) dir instead of node_modules/

// var kittens is set to whatever kittens.js assigns to module.exports

console.log(kittens.greeting); // log the greeting

// log kittens' module.exports{}
console.log(kittens);

var kittiesArr = kittens.kittensKey;

// log all kittens and their furColors
for (var i = 0; i < kittiesArr.length; i++) {
    var name = kittiesArr[i].name;
    var fur = kittiesArr[i].furColor;

    console.log(name + '\'s fur color is ' + fur);   
}

// app.listen(port, function(){
//     console.log('listening on port',port);
    
// })