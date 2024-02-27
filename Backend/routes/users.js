import { Router } from 'express'
import { UserController } from '../controller/user.js'
const userRoutes = Router()

userRoutes.get('/', (req, res) => {
    res.status(200)
})
userRoutes.post('/', UserController.createUser)

userRoutes.get('/login', UserController.login)

userRoutes.delete('/:id', UserController.deleteUser)


export default userRoutes
