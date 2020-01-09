const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// app.use("/", require("./routes"));

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true  })
  .catch(console.log)
  .then(() => {
    console.log(1);
    app.listen(3000, () => {
      console.log('App is listening on port 3000');
    });
  });
