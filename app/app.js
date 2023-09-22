import express, { json } from 'express';

import productRouter from './roters/product-router.js'

const app = express();

app.use(json());
app.use('/product', productRouter);

export default app;