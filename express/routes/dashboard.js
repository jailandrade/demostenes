var express = require('express');
var router = express.Router();

/* GET dashboard listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard/index', { title: 'Demostenes' });
});

module.exports = router;
