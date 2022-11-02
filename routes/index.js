var express = require('express');
var router = express.Router();
const DB = require('../services/config');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.render('index', { title: 'Build API' });
});

module.exports = router;
