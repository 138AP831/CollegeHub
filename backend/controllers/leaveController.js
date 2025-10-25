const Leave = require('../models/Leave');

// Get total leaves taken by the currently logged-in teacher
exports.getTeacherLeaves = async (req, res) => {
  try {
    // Ensure only teachers can view their leaves
    if (req.user.role !== 'Teacher') {
      return res.status(403).json({ message: 'Access denied. Only teachers can view leave data.' });
    }

    const teacherId = req.user.id;
    const leaveDoc = await Leave.findOne({ teacher: teacherId });

    res.status(200).json({
      teacher: teacherId,
      totalLeaves: leaveDoc ? leaveDoc.totalLeavesTaken : 0,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
