const express = require('express');
const router = express.Router();
const { createNotification, getNotifications } = require('../controllers/notificationController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.post('/', protect, authorize('Admin'), createNotification);
router.get('/', protect, getNotifications);

module.exports = router;
