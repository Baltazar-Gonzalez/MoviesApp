import { sequelize } from '../database/database.js'
import { FavoriteModel } from './favorites.js'
import { DataTypes } from 'sequelize'

export const UserModel = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

//Un usuario tiene muchos favoritos
UserModel.hasMany(FavoriteModel, {
  foreignKey: 'userId',
  sourceKey: 'id',
})
//Un favorito pertenece a un usuario
FavoriteModel.belongsTo(UserModel, {
  foreignKey: 'userId',
  targetKey: 'id',
})
