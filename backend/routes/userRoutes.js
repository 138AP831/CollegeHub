const express = require('express');
const router = express.Router();
const { getAllUsers, getMe } = require('../controllers/userController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.get('/', protect, authorize('Admin'), getAllUsers);
router.get('/me', protect, getMe);

module.exports = router;
