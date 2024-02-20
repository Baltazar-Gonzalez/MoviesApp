import express, { json } from "express"
import cors from "cors"
import movieRoutes from "./routes/movies.js"
import serieRoutes from "./routes/series.js"

const app = express()
const PORT = process.env.PORT ?? 5500

//Middlewares
app.use(cors())
app.use(json())

app.get("/", (req, res) => {
    res.end("<h1>Bien</h1>")
})

app.use("/movies", movieRoutes)
app.use("/series", serieRoutes)

app.listen(PORT, () => console.log(`server listening on port http://localhost:${PORT}`))