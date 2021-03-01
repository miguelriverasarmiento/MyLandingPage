const express = require('express');
const router = express.Router();
var emailControllerPost = require('../controller/emailsController');

router.get('/', function(req, res) {
    res.render('index.html', { title: 'First web'});
  });

router.post('/', emailControllerPost.createUser);

module.exports = router;
