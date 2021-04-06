const express = require('express')

const PlayerCtrl = require('../controllers/player-ctrl')

const router = express.Router()

router.get('/all', PlayerCtrl.getPlayers)
router.post('/', PlayerCtrl.createPlayer)
router.put('/:id', PlayerCtrl.updatePlayer)
router.delete('/:id', PlayerCtrl.deletePlayer)
router.get('/:id', PlayerCtrl.getPlayerById)

module.exports = router