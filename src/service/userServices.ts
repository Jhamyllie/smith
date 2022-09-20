import jwt from 'jsonwebtoken';
import userModels from '../models/userModels';

async function users(
  username: string,
  classe: string,
  level: number,
  password: string,
) {
  const { id } = await userModels.users(username, classe, level, password);
  const token = jwt.sign({ id }, 'garibaldo');
  return { token };
}

export default { users };