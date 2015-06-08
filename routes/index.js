var express, router;

express = require("express");

router = express.Router();

router.get('/', function(req, res) {
  return res.render("index");
});

router.get('/detail', function(req, res) {
  return res.render("detail");
});

router.get('/login', function(req, res) {
  return res.render("login");
});

router.get('/login2', function(req, res) {
  return res.render("login2");
});

module.exports = router;
