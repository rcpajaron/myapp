var express = require('express')
var app = express()
var path = require('path');

app.use(express.static(path.join(__dirname,"public")))

let port = Number(process.env.PORT || 5000 );
app.listen(port,()=>{
	console.log("port" + port);
});

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/', function(req, res) {
// 	res.send('Hello World');
// });

// app.get('/services', function(req, res) {
// 	res.sendFile('services.html', {"root": __dirname});
// });

// app.get('/about', function(req, res) {
// 	res.sendFile('about.html', {"root": __dirname})
// ;});

// app.listen(3000, function () {
//   console.log('Server is running on port 3000!')
// })

/*var express = require('express');
var app = express

var path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.get('/services', function(req, res) {
	res.sendFile('services.html', {"root": __dirname});
});

app.get('/about', function(req, res) {
	res.sendFile('about.html', {"root": __dirname});
});

app.listen('3000', function(){
	console.log("Server is running on port 3000!");

});*/