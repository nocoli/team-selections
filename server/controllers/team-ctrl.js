const Team = require('../models/team-model')

getTeams = async (req, res) => {
    await Team.find({}, (err, teams) => {
        console.log(teams);
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: teams })
    }).catch(err => console.log(err))
}

module.exports = {
    getTeams
}