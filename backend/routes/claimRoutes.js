const express = require('express');
const { getUserPoint, claimPoints, getLeaderboard } = require('../controllers/claimController');
const router = express.Router();

router.post('/claim/:userId', claimPoints)
router.get('/leaderboard', getLeaderboard)
router.get('/history/:userId',getUserPoint)

module.exports = router