import { Sequelize } from 'sequelize'
import { PASSWORD } from '../config.js'

export const sequelize = new Sequelize('mediaapp', 'postgres', PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
})
