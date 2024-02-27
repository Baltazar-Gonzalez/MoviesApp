import { sequelize } from '../database/database.js'
import { DataTypes } from 'sequelize'

export const FavoriteModel = sequelize.define('favorites', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    favId: {
        type: DataTypes.INTEGER,
    },
    type: {
        type: DataTypes.STRING,
    },
})
