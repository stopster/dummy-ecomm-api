var fs = require('fs');
var express = require('express');

var app = express();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});

app.get('/', function (req, res){
	var products = fs.readFileSync('products.json', 'UTF-8');
  res.setHeader("Content-type", "application/json");
	res.send(products);
});

app.use('/images', express.static('images'));

var server = app.listen(3000);
