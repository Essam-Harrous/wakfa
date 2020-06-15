const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const app = express();

app.get('/h', (req, res) => {
  console.log('lambda is working');
  res.send('lambda functions is working');
});

module.exports.handler = serverless(app);
