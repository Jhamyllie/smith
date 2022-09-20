import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ProductsType } from '../Types';

const TABLE = 'Trybesmith.Products';

async function products(name: string, amount: string):Promise<ProductsType> {
  const query = `INSERT INTO ${TABLE} (name, amount) VALUES (?, ?)`;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, name, amount };
}

export default { products };