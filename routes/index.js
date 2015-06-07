var express, router;

express = require("express");

router = express.Router();

router.get('/', function(req, res) {
  return res.render("index");
});

router.get('/detail', function(req, res) {
  return res.render("detail");
});

module.exports = router;
