const mongoose = require('mongoose')
const teamModel = require('./team-model')
const Schema = mongoose.Schema

const TeamSelection = new Schema(
    {
        team: {type: Schema.Types.ObjectId, ref: 'Team'},
        round: { type: String, required: true },
        format: { type: String, required: true },
        startDate: { type: Date, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('teamSelections', TeamSelection)