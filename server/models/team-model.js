const mongoose = require('mongoose')
const playerModel = require('./player-model')
const seasonsModel = require('./seasons-model')
const Schema = mongoose.Schema

const Team = new Schema(
    {
        competition: { type: String, required: true },
        season: seasonsModel,
        captain: playerModel

    },
    { timestamps: true },
)

module.exports = mongoose.model('teams', Team)