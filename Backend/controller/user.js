import { UserModel } from '../models/user.js'
import jwt from 'jsonwebtoken'
import crypto from 'node:crypto'
import { SECRET } from '../config.js'

function generateAccessToken(user) {
  return jwt.sign(user, SECRET)
}

export class UserController {
  //Traer usuario por id
  static async getUserById(req, res) {
    const { id } = req.params
    try {
      const user = await UserModel.findByPk(id, {
        attributes: { exclude: ['password'] },
      })

      return res.json(user)
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error al obtener usuario por ID' })
    }
  }
  //Traer lista de por usuarios
  static async getAllUser(req, res) {
    const page = req.query.page || 1
    const limit = 20

    try {
      const { count, rows: users } = await UserModel.findAndCountAll({
        attributes: { exclude: ['password'] },
        limit,
        offset: (page - 1) * limit,
      })

      const total_pages = Math.ceil(count / limit)

      return res.status(200).json({
        page,
        results: users,
        total_pages,
        total_results: count,
      })
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener usuarios' })
    }
  }
  //Creación de usuario
  static async createUser(req, res) {
    const { id, name, email, image, password, confirmPassword } = req.body
    try {
      const user = await UserModel.findOne({
        where: { email },
        raw: true,
        nest: true,
      })
      if (user) {
        return res
          .status(401)
          .json({ message: 'Ya existe un usuario con este email' })
      }
      if (password !== confirmPassword) {
        return res.status(401).json({ message: 'Las contraseñas no coinciden' })
      }

      const hashedPassword = crypto
        .createHash('sha256')
        .update(password)
        .digest('hex')
      const newUser = await UserModel.create({
        id,
        name,
        email,
        image,
        password: hashedPassword,
      })
      return res.json(newUser)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await UserModel.destroy({
        where: {
          id,
        },
      })
      return res.status(204)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Login de usuario
  static async login(req, res) {
    const { email, password } = req.body

    try {
      const user = await UserModel.findOne({
        where: { email },
        raw: true,
        nest: true,
      })

      if (!user) {
        return res
          .status(401)
          .json({ message: 'Email y/o contraseña incorrectos' })
      }

      const hashedPassword = crypto
        .createHash('sha256')
        .update(password)
        .digest('hex')

      if (user.password !== hashedPassword) {
        return res
          .status(401)
          .json({ message: 'Email y/o contraseña incorrectos' })
      }

      const accesToken = generateAccessToken(user)
      return res.status(200).header('Authorization', accesToken).json({
        message: 'Inicio de sesión exitoso',
        user,
        token: accesToken,
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  //Autentificación de usuario
  static async auth(req, res) {
    try {
      const accessToken = req.headers['authorization']

      if (!accessToken) {
        return res
          .status(401)
          .json({ message: 'Acceso denegado. Token no proporcionado.' })
      }

      jwt.verify(accessToken, SECRET, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Token inválido o caducado.' })
        } else {
          return res
            .status(200)
            .json({ message: 'Token válido. Acceso permitido.', decoded })
        }
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
