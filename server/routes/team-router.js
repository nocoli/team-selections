const express = require('express')

const TeamCtrl = require('../controllers/team-ctrl')

const router = express.Router()

router.get('/all', TeamCtrl.getTeams)

module.exports = router