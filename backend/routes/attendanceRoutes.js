const express = require('express');
const router = express.Router();
const { markAttendance, getAttendanceByStudent } = require('../controllers/attendanceController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.post('/mark', protect, authorize('Teacher'), markAttendance);
router.get('/my', protect, authorize('Student'), getAttendanceByStudent);

module.exports = router;
