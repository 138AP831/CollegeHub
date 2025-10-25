const express = require('express');
const router = express.Router();
const { getStudentDashboard, getTeacherDashboard, getAdminDashboard } = require('../controllers/dashboardController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/student', protect, getStudentDashboard);
router.get('/teacher', protect, getTeacherDashboard);
router.get('/admin', protect, getAdminDashboard);

module.exports = router;
