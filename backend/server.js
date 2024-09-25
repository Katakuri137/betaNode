const express = require("express")
const mongoose = require('mongoose')
const userRouter = require('./routers/userRouter')
const movieRouter = require('./routers/movieRouter')
const app = express()

app.use(express.json())
app.use(userRouter);
app.use(movieRouter)

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connecté sur le port 3000");
    }
})

app.get('/yo', (req, res) => {
    try {
        res.json({ message: "Yes let's go!" });
    } catch (err) {
        res.json(err);
    }
});

mongoose.connect('mongodb://localhost:27017/usermovie');

