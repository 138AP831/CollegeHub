const express = require('express');
const router = express.Router();
const { getChatRooms, getChatMessages, sendMessage } = require('../controllers/chatController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/rooms', protect, getChatRooms);
router.get('/rooms/:roomId/messages', protect, getChatMessages);
router.post('/rooms/:roomId/messages', protect, sendMessage);

module.exports = router;
