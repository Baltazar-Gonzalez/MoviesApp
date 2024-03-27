import { Sequelize } from 'sequelize'
import { USER, PASSWORD, HOST } from '../config.js'

//Conexión con la base de datos Postgres
export const sequelize = new Sequelize('movie-app-postgres', USER, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false 
  }
})
