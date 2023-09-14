import { Pool } from 'pg';
import { DatabaseConfig } from '../../config/database';
import { DatabaseConnection } from '../../types/database';

export const connectToPostgreSQL: DatabaseConnection = async (config: DatabaseConfig) => {
  const pool = new Pool({
    user: config.username,
    password: config.password,
    host: config.host,
    port: config.port,
    database: config.database,
  });

  try {
    await pool.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
  }

  return pool;
};