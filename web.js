var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello, Mr. Wanchic');
  res.send('-- I\'m going to Auto-Deploy now. +1');
});

app.listen(process.env.PORT || 3000);
