const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
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

const chatRoomSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  roomType: { type: String, enum: ['individual', 'group', 'class'], required: true },
  roomName: { type: String },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  messages: [messageSchema],
  lastMessage: {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    timestamp: { type: Date, default: Date.now }
  },
  unreadCount: { type: Map, of: Number, default: {} },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('GeneralChat', chatRoomSchema);
