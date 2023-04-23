const express = require('express');
const { registration, authUser, allUsers } = require('../userControllers/userControllers');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();


router.route('/').post(registration).get(protect, allUsers);

module.exports = router;
