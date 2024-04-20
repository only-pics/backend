import express from 'express';
import cors from 'cors';

import config from './config.js';
import postRoute from './Routes/postRoute.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api', postRoute);

app.listen(`${process.env.VERCEL_URL || config.port}`, () =>
// app.listen(`${config.port}`, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);