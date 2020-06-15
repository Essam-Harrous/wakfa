const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const route = express.Router();
app.use('/.netlify/functions/api', route);

route.get('/', (req, res) => {
  console.log('lambda is working');
  res.status(200).send('lambda functions is working');
});

module.exports.handler = serverless(app);
