var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.get('/', function(req, res) {
	res.send('Hello World', {"root": __dirname});
});
app.get('/services', function(req, res) {
	res.sendFile('services.html', {"root": __dirname});
});

app.get('/about', function(req, res) {
	res.sendFile('about.html', {"root": __dirname});
});

app.listen('3000', function(){
	console.log("Server is running on port 3000!");

});