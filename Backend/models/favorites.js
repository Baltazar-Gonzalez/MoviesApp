import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const FavoriteModel = sequelize.define('favorites', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  favId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
