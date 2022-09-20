import express from 'express';
import orderController from './controller/orderController';
import productsController from './controller/ProductsController';
import userController from './controller/userController';

const app = express();

app.use(express.json());

app.post('/products', productsController.products);

app.get('/products', productsController.getProducts);

app.post('/users', userController.users);

app.get('/orders', orderController.orders);

export default app;