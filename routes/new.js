const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messages');

router.get('/', function (req, res, next) {
  res.render('new', { title: 'New message' });
});

router.post('/', (req, res) => {
  if (!req.body.messageArea || !req.body.userName) {
    res.status(400).send('Entries my have a title and a body');
    return;
  }
  messages.push({
    text: req.body.messageArea,
    user: req.body.userName,
    added: new Date().toLocaleString(),
  });
  res.redirect('/');
});

module.exports = router;
