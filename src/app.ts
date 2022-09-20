import express from 'express';
import productsController from './controller/ProductsController';

const app = express();

app.use(express.json());

app.post('/products', productsController.products);

app.get('/products', productsController.getProducts);

export default app;