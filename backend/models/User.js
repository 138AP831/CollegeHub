const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['student', 'teacher', 'admin'], required: true },
  name: { type: String, required: true },
  rollNo: { type: String },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  course: String,
  department: String,
  contact: String,
  address: String,
  dob: Date,
  joinedOn: { type: Date, default: Date.now },
  subjects: [String],
  profilePicUrl: String
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);