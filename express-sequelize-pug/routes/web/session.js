var express = require('express');
var router = express.Router();

/* GET session listing. */
router.get('/login', function(req, res, next) {
  res.render('session/login', { title: 'Demostenes' });
});

router.get('/register', function(req, res, next) {
  res.render('session/register', { title: 'Demostenes' });
});


module.exports = router;
