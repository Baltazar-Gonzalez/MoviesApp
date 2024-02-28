import { Router } from 'express'
import { UserController } from '../controller/user.js'
const userRoutes = Router()

userRoutes.get('/', (req, res) => {
    res.status(200)
})
userRoutes.post('/', UserController.createUser)

userRoutes.get('/all', UserController.getAllUser)

userRoutes.post('/login', UserController.login)

userRoutes.get('/:id', UserController.getUserById)

userRoutes.delete('/:id', UserController.deleteUser)

export default userRoutes
