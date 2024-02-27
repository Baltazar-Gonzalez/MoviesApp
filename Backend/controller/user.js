import { UserModel } from '../models/user.js'
import crypto from 'node:crypto'

export class UserController {
    static async createUser(req, res) {
        const { id, name, email, image, password } = req.body

        try {
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
            res.json(newUser)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            const newUser = await UserModel.destroy({
                where: {
                    id,
                },
            })
            res.status(204)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async login(req, res) {
        const { email, password } = req.body

        try {
            const user = await UserModel.findOne({ where: { email } })

            if (!user) {
                return res
                    .status(401)
                    .json({ message: 'Credenciales inválidas' })
            }

            const hashedPassword = crypto
                .createHash('sha256')
                .update(password)
                .digest('hex')

            if (user.password !== hashedPassword) {
                return res
                    .status(401)
                    .json({ message: 'Credenciales inválidas' })
            }

            return res
                .status(200)
                .json({ message: 'Inicio de sesión exitoso', user })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}
