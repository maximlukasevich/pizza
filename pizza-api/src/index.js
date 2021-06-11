import express from 'express';
import mongoose from 'mongoose';
import { router } from './settings/routes.js'
import {} from 'dotenv/config';

const app = express();

app.use('/api', router)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('\n pizza-api \n');
    console.log('- Success connect to mongoDB');
    app.listen(process.env.PORT, () => console.log(`- Server started at port:${process.env.PORT}`))
  })
  .catch((e) => console.error(e))
