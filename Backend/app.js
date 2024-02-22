import express, { json } from "express"
import {sequelize} from "./database/database.js"
import cors from "cors"
import movieRoutes from "./routes/movies.js"
import serieRoutes from "./routes/series.js"

const app = express()
const PORT = process.env.PORT ?? 5500

async function main(){
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully")
        app.listen(PORT, () => console.log(`server listening on port http://localhost:${PORT}`))
    } catch(err){
        console.log("Unable to connect to the database", err)
    }
}

//Middlewares
app.use(cors())
app.use(json())

app.get("/", (req, res) => {
    res.end("<h1>Bien</h1>")
})

app.use("/movies", movieRoutes)
app.use("/series", serieRoutes)

main()