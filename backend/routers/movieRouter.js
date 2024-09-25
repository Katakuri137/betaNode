const movieModel = require('../models/movieModel')
const userModel = require('../models/userModel')
const movieRouter = require('express').Router()

movieRouter.post('/users/:userid/movies', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userid);
        if (!user) {
            throw new Error("L'utilisateur essayant de créer un film n'existe pas")
        }
        const newMovie = new movieModel(req.body)
        await newMovie.save()
        await userModel.updateOne({_id: req.params.userid}, { $push:{ movies : newMovie._id } })
        res.json(newMovie)
    } catch (error) {
        res.json(error.message)
    }
})


movieRouter.delete('/users/:userid/movies/:movieid', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userid);
        if (!user) {
            throw new Error("L'utilisateur essayant de créer un film n'existe pas");
        }
        await movieModel.deleteOne({ _id: req.params.movieid })
        await userModel.updateOne({ _id: req.params.userid }, { $pull: { movies: { _id: req.params.movieid }}});
        res.json({ message: "le film a bien été suprimé" })
    } catch (error) {
        res.json(error.message);
    }
})


module.exports = movieRouter
