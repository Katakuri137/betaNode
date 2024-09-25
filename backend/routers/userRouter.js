const userModel = require('../models/userModel')
const userRouter = require('express').Router()

userRouter.post('/users', async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        res.json(error)

    }
})

userRouter.get('/users', async (req, res) => {
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        res.json(error)
    }
})

userRouter.get('/users/:id', async (req, res) => {
    try {
        const users = await userModel.findOne({ _id: req.params.id })
        res.json(users)
    } catch (error) {
        res.json(error)
    }
})

userRouter.put('/users/:id', async (req, res) => {
    try {
        await userModel.updateOne({ _id: req.params.id }, req.body)
        res.json({ message: "l'utilisateur a bien été modifier" })
    } catch (error) {
        res.json(error)
    }
})

userRouter.delete('/users/:id', async (req, res) => {
    await userModel.deleteOne({ _id: req.params.id })
    res.json({ message: "l'utilisateur a bien été supprimé" })
})

module.exports = userRouter
