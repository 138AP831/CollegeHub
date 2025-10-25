const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  leaveType: { type: String, enum: ['sick', 'casual', 'emergency', 'maternity', 'paternity', 'other'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  approvedAt: { type: Date },
  rejectionReason: { type: String },
  attachments: [{
    filename: { type: String },
    url: { type: String },
    type: { type: String }
  }],
  totalDays: { type: Number },
  isHalfDay: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Leave', leaveSchema);
