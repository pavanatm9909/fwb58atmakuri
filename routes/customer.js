var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('customer', { title: 'Search Results Customer' });
});

module.exports = router;
