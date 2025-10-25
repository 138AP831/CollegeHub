const Attendance = require('../models/Attendance');

// Mark attendance (teacher only)
exports.markAttendance = async (req, res) => {
  try {
    const records = req.body.records; // [{studentId, courseId, date, status}]
    await Attendance.insertMany(records);
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get attendance (for student dashboard)
exports.getAttendanceByStudent = async (req, res) => {
  try {
    const attendance = await Attendance.find({ student: req.user.id }).populate('course');
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
