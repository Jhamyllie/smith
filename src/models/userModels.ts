import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const TABLE = 'Trybesmith.Users';

async function users(
  username: string,
  classe: string,
  level: number,
  password: string,
) {
  const query = `INSERT INTO ${TABLE} (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await 
  connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
  return { id: insertId };
}

export default { users };