import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'password',
});

export default connection;