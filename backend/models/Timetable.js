const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  course: { type: String, required: true },
  subject: { type: String, required: true },
  day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
  time: { type: String, required: true },
  room: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['Lecture', 'Lab', 'Tutorial'], default: 'Lecture' },
}, { timestamps: true });

module.exports = mongoose.model('Timetable', timetableSchema);
