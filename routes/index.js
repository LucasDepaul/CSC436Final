var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresdfsdf' });
  res.send('hello')
});

// example on routes
router.get('/users/flights/:from-:to', function (req, res) {
  res.json(req.params)
})

module.exports = router;
