const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('lambda functions is working');
});

module.exports.handler = serverless(app);
