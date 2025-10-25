const express = require('express');
const router = express.Router();
const { getTeacherLeaves } = require('../controllers/leaveController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.get('/', protect, authorize('Teacher'), getTeacherLeaves);

module.exports = router;
