var express = require('express');
var path = require('path');
var connection = require('./mysql');
var app = express();
app.listen(3000);

// cau hinh EJS

app.set('view engine','ejs');
app.set('views', './views');


app.get("/", function(req, res){
    res.render("welcome");
});

app.get("/welcome.html", function(req, res){
    res.render("welcome");
});

app.get("/sensor.html", function(req, res){
    res.render("sensor");
});

app.use(express.static(path.join(__dirname, 'public')));


