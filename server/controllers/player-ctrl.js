const Player = require('../models/player-model')

createPlayer = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const player = new Player(body)

    if (!player) {
        return res.status(400).json({ success: false, error: err })
    }

    player
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: player._id,
                message: 'Player created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Player not created!',
            })
        })
}

updatePlayer = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Player.findOne({ _id: req.params.id }, (err, player) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Player not found!',
            })
        }
        player.name = body.name
        player
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: player._id,
                    message: 'Player updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Player not updated!',
                })
            })
    })
}

deletePlayer = async (req, res) => {
    await Player.findByIdAndRemove({ _id: req.params.id }, (err, player) => {
        console.log(player);
        console.log("about to lose");
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!player) {
            return res
                .status(404)
                .json({ success: false, error: `Player not found` })
        }

        return res.status(200).json({ success: true, data: player })
    })
}

getPlayerById = async (req, res) => {
    await Player.findOne({ _id: req.params.id }, (err, player) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!player) {
            return res
                .status(404)
                .json({ success: false, error: `Player not found` })
        }
        return res.status(200).json({ success: true, data: player })
    }).catch(err => console.log(err))
}

getPlayers = async (req, res) => {
    await Player.find({}, (err, players) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!players.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: players })
    }).catch(err => console.log(err))
}

module.exports = {
    createPlayer,
    updatePlayer,
    deletePlayer,
    getPlayers,
    getPlayerById,
}