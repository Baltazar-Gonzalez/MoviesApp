import { Sequelize } from 'sequelize'

//Conexión con la base de datos Postgres
export const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
})
