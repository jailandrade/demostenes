var express = require('express');

var router = express.Router();

/* GET dashboard listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard/index', { title: 'Dashboard | Demostenes' });
});

router.get('/items', function(req, res, next) {
  res.render('dashboard/items', { title: 'Items | Demostenes' });
});

router.get('/items/:key', function(req, res, next) {
  res.render('dashboard/item', { title: 'Item | Demostenes' });
});

router.get('/users', function(req, res, next) {
  res.render('dashboard/users', { title: 'Users | Demostenes' });
});

router.get('/users/:key', function(req, res, next) {
  res.render('dashboard/user', { title: 'User | Demostenes' });
});

router.get('/profile', function(req, res, next) {
  res.render('dashboard/profile', { title: 'Profile | Demostenes' });
});

router.get('/settings', function(req, res, next) {
  res.render('dashboard/settings', { title: 'Settings | Demostenes' });
});

router.get('/graphs', function(req, res, next) {
  res.render('dashboard/graphs', { title: 'graphs | Demostenes' });
});

module.exports = router;
