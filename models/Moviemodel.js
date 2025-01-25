const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    moviename : String,
    hero : String,
    heroine : String,
    year : Number,
    rating : Number,
    genre : String,
})

const Moviemodel = mongoose.model('Moviedata', MovieSchema)
module.exports = Moviemodel