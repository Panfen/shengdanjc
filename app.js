var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index')
});

app.listen(8080);
console.log('server is on 8080 ...')