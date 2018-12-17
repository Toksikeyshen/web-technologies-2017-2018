import dotenv from 'dotenv'

dotenv.config();

const { DB_NAME, DB_PORT, DB_HOST, DB_PASS, DB_USER } = process.env;

export const config = {
  DB_NAME,
  DB_PORT,
  DB_HOST,
  DB_PASS,
  DB_USER
};
