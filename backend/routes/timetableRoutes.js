const express = require('express');
const router = express.Router();
const { createTimetable, getTimetable } = require('../controllers/timetableController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.post('/', protect, authorize('Admin'), createTimetable);
router.get('/', protect, getTimetable);

module.exports = router;
