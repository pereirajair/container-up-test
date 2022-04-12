var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
  res.send(
    { "greeting": "Hello, world tEST!" }
  );
});

module.exports = router;
