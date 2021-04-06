const mongoose = require('mongoose')
const playerModel = require('./player-model')
const seasonsModel = require('./seasons-model')
const Schema = mongoose.Schema

const Team = new Schema(
    {
        competition: { type: String, required: true },
        season: {type: Schema.Types.ObjectId, ref: 'Season'},
        captain: {type: Schema.Types.ObjectId, ref: 'Player'}

    },
    { timestamps: true },
)

module.exports = mongoose.model('teams', Team)