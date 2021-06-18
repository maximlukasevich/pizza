require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./settings/routes');
const cors = require('./middlewares/cors.middleware');

const app = express();

app.use(bodyParser.json({limit: '16mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '16mb', extended: true }));
app.use(cors);
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
