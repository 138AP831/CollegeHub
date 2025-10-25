const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  location: { type: String, required: true },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['academic', 'cultural', 'sports', 'technical', 'other'], default: 'other' },
  targetAudience: { type: String, enum: ['all', 'students', 'teachers', 'admins'], default: 'all' },
  capacity: { type: Number },
  registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  attachments: [{
    filename: { type: String },
    url: { type: String },
    type: { type: String }
  }],
  isActive: { type: Boolean, default: true },
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
