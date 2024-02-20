import { MovieModel } from "../models/movie.js";

export class MovieController{
    static async getPopulars(req, res){
        try{
            const movies = await MovieModel.getPopulars()
            res.json(movies)
        }catch(err){
            res.status(500).json({message: error.message})
        }
    }
    static async getNowPlaying(req, res){
        try{
            const movies = await MovieModel.getNowPlaying()
            res.json(movies)
        }catch(err){
            res.status(500).json({message: error.message})
        }
    }
    static async getAnimationMovies(req, res){
        try{
            const movies = await MovieModel.getAnimationMovies()
            res.json(movies)
        }catch(err){
            res.status(500).json({message: error.message})
        }
    }
}