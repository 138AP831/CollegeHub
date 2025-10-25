const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  action: { type: String, required: true },
  user: { type: String, required: true },
  details: { type: String }
});

const issueSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, enum: ['P0', 'P1', 'P2', 'P3', 'P4'], required: true },
  department: { type: String, required: true },
  issueType: { type: String, enum: ['Technical', 'Academic', 'Facility', 'Administrative'], required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Resolved'], default: 'Open' },
  openedBy: { type: String, required: true },
  openedOn: { type: Date, default: Date.now },
  resolver: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attachments: [{
    filename: { type: String },
    originalName: { type: String },
    url: { type: String },
    uploadedAt: { type: Date, default: Date.now }
  }],
  auditLogs: [auditLogSchema],
  tags: [String],
  estimatedResolution: { type: Date },
  actualResolution: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Issue', issueSchema);
