
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'client')));

var http = require('http');
//TODO generic /led/* path and just 'apply' / eval the cmd


app.get('/candy', function(req, res){
  res.send('candy ');
  if(app.candyMachine){
    app.candyMachine.dispense();
  }
});


app.get('/open', function(req, res){
  res.send('candy open');
  if(app.candyMachine){
    app.candyMachine.open();
  }
});

app.get('/close', function(req, res){
  res.send('candy close');
  if(app.candyMachine){
    app.candyMachine.close();
  }
});


var server = app.listen(3001, function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;
