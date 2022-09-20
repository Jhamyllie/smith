import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { GetProducts, ProductsType } from '../Types';

const TABLE = 'Trybesmith.Products';

async function products(name: string, amount: string):Promise<ProductsType> {
  const query = `INSERT INTO ${TABLE} (name, amount) VALUES (?, ?)`;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, name, amount };
}

async function getProducts(): Promise<GetProducts[]> {
  const [product] = await connection.execute<RowDataPacket[]>(`SELECT * FROM ${TABLE}`);
  return product as GetProducts[];
}
export default { products, getProducts };