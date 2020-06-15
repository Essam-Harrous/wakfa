const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    'mongodb+srv://essam:1234@test1-jvuqg.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .catch((err) => {
    console.log(err);
  });
mongoose.connection.once('open', () => console.log('database is connected'));

const route = express.Router();
app.use('/.netlify/functions/api', route);

route.get('/', (req, res) => {
  console.log('lambda is working');
  res.status(200).send('lambda functions is working');
});

module.exports.handler = serverless(app);
