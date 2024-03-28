import { Sequelize } from 'sequelize'
import { USER, PASSWORD, HOST, DB } from '../config.js'

//Conexión con la base de datos Postgres
export const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false 
  }
})
