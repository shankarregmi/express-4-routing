var express = require('express');
var test = express.Router();

test.get('/', function(req, res, next) {
  res.send('this is test route');
});
module.exports = test;
