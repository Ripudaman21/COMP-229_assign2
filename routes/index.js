var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
function clicker() {
  alert("Button Working!");
};
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Services' , x: clicker});
});
module.exports = router;
function foo() {
  alert("Submit button clicked!");
  return true;
}