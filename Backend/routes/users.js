import { Router } from 'express'
import { UserController } from '../controller/user.js'
const userRoutes = Router()

userRoutes.get('/', (req, res) => {
  res.status(200)
})
//Creación de usuario
userRoutes.post('/', UserController.createUser)

//Lista de usuario
userRoutes.get('/all', UserController.getAllUser)

//Autenticación
userRoutes.get('/auth', UserController.auth)

//Inicio de sesión
userRoutes.post('/login', UserController.login)

//Buscar usuario por id
userRoutes.get('/:id', UserController.getUserById)

//Eliminar usuario por id
userRoutes.delete('/:id', UserController.deleteUser)

export default userRoutes
