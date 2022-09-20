import { Request, Response } from 'express';
import orderService from '../service/orderService';

async function orders(req: Request, res: Response) {
  const pedido = await orderService.orders();
  return res.status(200).json(pedido);
}

export default { orders };