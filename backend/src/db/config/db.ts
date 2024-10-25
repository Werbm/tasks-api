import 'dotenv/config'
import { Sequelize } from 'sequelize'


const {
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_HOST

} = process.env

const config = new Sequelize({
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
  }) 

export default config; 