const Course = require('../models/Course');

// Get all courses (Admin only)
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('teacher studentsEnrolled');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get courses assigned to teacher
exports.getTeacherCourses = async (req, res) => {
  try {
    const teacherId = req.user.id;
    const courses = await Course.find({ teacher: teacherId });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get student courses
exports.getStudentCourses = async (req, res) => {
  try {
    const studentId = req.user.id;
    const courses = await Course.find({ studentsEnrolled: studentId });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
