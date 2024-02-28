import express from 'express'
import { sequelize } from './database/database.js'
import cors from 'cors'
import movieRoutes from './routes/movies.js'
import serieRoutes from './routes/series.js'
import userRoutes from './routes/users.js'
import favoritesRoutes from './routes/favorites.js'

const app = express()
const PORT = process.env.PORT ?? 5500

async function main() {
    try {
        await sequelize.sync({ force: true })
        console.log('Connection has been established successfully')
        app.listen(PORT, () =>
            console.log(`server listening on port http://localhost:${PORT}`),
        )
    } catch (err) {
        console.log('Unable to connect to the database', err)
    }
}

//Middlewares
app.use(cors())
app.use(express.json())

//Endpoint
app.use('/movies', movieRoutes)
app.use('/series', serieRoutes)
app.use('/users', userRoutes)
app.use('/favorites', favoritesRoutes)

app.use('/', (req, res) => {
    res.status(404).send("Ruta no encontrada")
})

main()
