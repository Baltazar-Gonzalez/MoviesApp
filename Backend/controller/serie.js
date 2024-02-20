import { SerieModel } from "../models/serie.js";

export class SerieController{
    static async getPopulars(req, res){
        try{
            const series = await SerieModel.getPopulars()
            res.json(series)
        }catch(err){
            res.status(500).json({message: error.message})
        }
    }
    static async getOnTheAir(req, res){
        try{
            const series = await SerieModel.getOnTheAir()
            res.json(series)
        }catch(err){
            res.status(500).json({message: error.message})
        }
    }
}