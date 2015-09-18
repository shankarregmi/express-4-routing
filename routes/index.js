var express = require('express');
var router = express.Router();
var test = require('./test');
var mero = require('./mero');
// define the home page route

router.use('/test', test);
router.use('/mero', mero);
router.use('/', function(req, res) {
  res.send('API Server Started')
});


module.exports = router;
