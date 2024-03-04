import { Sequelize } from 'sequelize'
import { PASSWORD } from '../config.js'

//Conexión con la base de datos Postgres
export const sequelize = new Sequelize('mediaapp', 'postgres', PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
})
