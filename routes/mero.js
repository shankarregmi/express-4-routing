var express = require('express');
var mero = express.Router();
mero.get('/', function(req,res, next) {
  res.send('mero route');
});
module.exports = mero;
