const Timetable = require('../models/Timetable');

// Admin creates timetable
exports.createTimetable = async (req, res) => {
  try {
    const timetable = await Timetable.create(req.body);
    res.status(201).json(timetable);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get timetable for a specific course or day
exports.getTimetable = async (req, res) => {
  try {
    const { courseId, day } = req.query;
    const timetable = await Timetable.find({
      ...(courseId && { course: courseId }),
      ...(day && { day })
    }).populate('course teacher');
    res.json(timetable);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
