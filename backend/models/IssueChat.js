const mongoose = require('mongoose');

const issueMessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
  attachments: [{
    filename: { type: String },
    url: { type: String },
    type: { type: String }
  }]
});

const issueChatSchema = new mongoose.Schema({
  issueId: { type: String, required: true, unique: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [issueMessageSchema],
  lastMessage: {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    timestamp: { type: Date, default: Date.now }
  },
  unreadCount: { type: Map, of: Number, default: {} },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('IssueChat', issueChatSchema);
