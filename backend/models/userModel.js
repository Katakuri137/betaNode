const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "le nom est requis"]
    },
    firstname : {
        type: String,
        required: [true, "le prénom est requis"]
    },
    email : {
        type: String,
        required: [true, "le mail est requis"]
    },
    age : {
        type: Number,
    },
    movies : [
        {type: mongoose.Schema.Types.ObjectId, ref: "movies"}
    ]
})

const userModel = mongoose.model("users", userSchema);
module.exports = userModel