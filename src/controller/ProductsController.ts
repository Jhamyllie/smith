import { Request, Response } from 'express';
import productService from '../service/productService';

async function products(req: Request, res: Response) {
  const { name, amount } = req.body;
  const product = await productService.products(name, amount);
  return res.status(201).json(product);
}

async function getProducts(req: Request, res: Response) {
  const product = await productService.getProducts();
  return res.status(200).json(product);
}

export default { products, getProducts };