const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Season = new Schema(
    {
        year: {type: String, required: true},
        season: { type: String, required: true },
        day: { type: String, required: true },
        format: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('seasons', Season)