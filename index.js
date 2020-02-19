var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/server'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded());

//app.use('/images', express.static(__dirname +'/images'));

app.get('/', function(req, res){
    res.sendfile('editor.html');
});

app.listen(port, function(){
    console.log('server is running on ' + port);
});

app.post('/run', function(req, res){
	console.log(req.body.content)
	fs.writeFile('Output.cpp', req.body.content, function (err) {

	  if (err) throw err;
	  else{
		var shell = require('shelljs')
		shell.exec('./execute_docker.sh')
	    console.log('Saved!');
	  }
	  res.sendfile('out.txt');
	});
});