import { Sequelize } from 'sequelize'
import { USER, PASSWORD, HOST, DB } from '../config.js'

//Conexión con la base de datos Postgres
export const sequelize = new Sequelize(DB, {
  dialect: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false 
  }
})
