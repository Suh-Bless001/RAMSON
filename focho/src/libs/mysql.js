// src/libs/mysql.js
import mysql from 'mysql2/promise';

export const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '100206',
  port:'3307',
  database: 'portfolio',
});
