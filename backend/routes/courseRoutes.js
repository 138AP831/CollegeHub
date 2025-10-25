const express = require('express');
const router = express.Router();
const { getAllCourses, getTeacherCourses, getStudentCourses } = require('../controllers/courseController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.get('/all', protect, authorize('Admin'), getAllCourses);
router.get('/teacher', protect, authorize('Teacher'), getTeacherCourses);
router.get('/student', protect, authorize('Student'), getStudentCourses);

module.exports = router;
