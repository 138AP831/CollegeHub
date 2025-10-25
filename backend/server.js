// ===============================
//  Import Dependencies
// ===============================
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// ===============================
//  Load Environment Variables
// ===============================
dotenv.config();

// ===============================
//  App Initialization
// ===============================
const app = express();

// ===============================
//  Middleware
// ===============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Serve uploads folder (for evidence attachments)
app.use('/uploads', express.static(path.join(__dirname, process.env.UPLOAD_DIR || 'uploads')));

// ===============================
//  MongoDB Connection
// ===============================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err.message));

// ===============================
//  Import Routes
// ===============================
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const courseRoutes = require('./routes/courseRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const timetableRoutes = require('./routes/timetableRoutes');
const issueRoutes = require('./routes/issueRoutes');
const chatRoutes = require('./routes/chatRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const adminMiscRoutes = require('./routes/adminMiscRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// ===============================
//  Use Routes
// ===============================
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/admin', adminMiscRoutes);

// ===============================
//  Default Route
// ===============================
app.get('/', (req, res) => {
  res.send('🎓 College Portal Backend Running Successfully!');
});

// ===============================
//  Start Server
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


