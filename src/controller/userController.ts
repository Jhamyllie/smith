import { Request, Response } from 'express';
import userServices from '../service/userServices';

async function users(req: Request, res: Response) {
  const { username, classe, level, password } = req.body;
  const token = await userServices.users(username, classe, level, password);
  return res.status(201).json(token);
}

export default { users };