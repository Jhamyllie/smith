import { RowDataPacket } from 'mysql2';
import { OrderType } from '../Types';
import connection from './connection';

const ORDER_TABLE = 'Trybesmith.Orders';
const PRODUCT_TABLE = 'Trybesmith.Products';

async function orders():Promise<OrderType[]> {
  const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds 
  FROM ${ORDER_TABLE} AS o
  INNER JOIN ${PRODUCT_TABLE} AS p
  ON o.id = p.orderId
  GROUP BY o.id
  ORDER BY o.userId`;
  const [pedido] = await connection.execute<RowDataPacket[]>(query);
  return pedido as OrderType[];
}

export default { orders };