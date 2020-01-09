const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(require('cors')());
app.use(bodyParser.json());
app.use('/', require('./src/routes'));

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true  })
  .catch(console.log)
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`App is listening on port ${port}`);
    });
  });
