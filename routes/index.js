var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  debug("en index.js: visitando '/'");
  res.render('index', { title: 'Quiz' });
});

module.exports = router;
