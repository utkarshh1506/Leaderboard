const express = require('express');
const router = express.Router();
const {getAllUser, addNewUser} = require('../controllers/userController')


router.get('/',getAllUser)
router.post('/',addNewUser)

module.exports = router