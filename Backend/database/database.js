import { Sequelize } from 'sequelize'
import { PASSWORD, HOST } from '../config.js'

//Conexión con la base de datos Postgres
export const sequelize = new Sequelize('mediaapp', 'postgres', PASSWORD, {
  host: HOST,
  dialect: 'postgres',
})
