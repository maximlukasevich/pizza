require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./settings/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => {
    console.log('\n pizza-api \n');
    console.log('- Success connect to mongoDB');
    app.listen(process.env.PORT, () => console.log(`- Server started at port:${process.env.PORT}`));
  })
  .catch((e) => console.error(e));
