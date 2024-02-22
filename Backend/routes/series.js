import { Router } from "express";
import { SerieController } from "../controller/serie.js";
const serieRoutes = Router()

serieRoutes.get("/", (req, res) => {
    res.status(200)
})

//Populares
serieRoutes.get("/populares", SerieController.getPopulars)

//Al aire
serieRoutes.get("/on-the-air", SerieController.getOnTheAir)

//Encontrar por busqueda
serieRoutes.get("/search", SerieController.getBySearch)

//Encontrar por id
serieRoutes.get("/:id", SerieController.getById)

export default serieRoutes