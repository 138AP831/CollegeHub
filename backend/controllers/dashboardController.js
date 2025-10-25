const User = require('../models/User');
const Attendance = require('../models/Attendance');
const Timetable = require('../models/Timetable');
const Notification = require('../models/Notification');

// Get student dashboard data
exports.getStudentDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get user profile
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Get attendance data
    const attendanceData = [
      { subject: "Engineering Graphics", icon: "A", attendance: 12, total: 14, percentage: 86, color: "bg-[#6B7CFF]" },
      { subject: "Mathematical Engineering", icon: "2", attendance: 27, total: 29, percentage: 93, color: "bg-[#FF6B9D]" },
      { subject: "Computer Architecture", icon: "💻", attendance: 27, total: 30, percentage: 90, color: "bg-[#4ECDC4]" },
      { subject: "Database Management", icon: "💾", attendance: 24, total: 25, percentage: 96, color: "bg-[#FF6B6B]" },
      { subject: "Network Security", icon: "💼", attendance: 25, total: 27, percentage: 93, color: "bg-[#95E1D3]" },
    ];

    // Get timetable
    const timetable = [
      { time: "10-11 AM", room: "05-305", subject: "DBMS60", type: "Lecture" },
      { time: "11-12 AM", room: "39-716", subject: "CS200", type: "Lecture" },
      { time: "01-02 PM", room: "32-309", subject: "MTH68", type: "Lecture" },
    ];

    // Get announcements
    const announcements = [
      { title: "Academic", text: "Summer training internship with Live Project", time: "2 Minutes Ago" },
      { title: "Co-curricular", text: "Global Internship opportunity by Student organization", time: "5 Minutes Ago" },
      { title: "Examination", text: "Instructions for Mid Term Examination", time: "Yesterday" },
    ];

    res.json({
      user: {
        name: user.name,
        rollNo: user.rollNo || '01203830',
        course: user.course || 'BTech CSE',
        contact: user.contact || '1234567890',
        email: user.email,
        address: user.address || 'Ghost town Road, New York, America',
        dob: user.dob || new Date('2000-02-28'),
      },
      attendance: attendanceData,
      timetable,
      announcements,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get teacher dashboard data
exports.getTeacherDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Mock data for teacher dashboard
    const performanceData = [
      { subject: "Machine Learning", score: 85 },
      { subject: "Data Structures", score: 78 },
      { subject: "Web Development", score: 92 },
      { subject: "Algorithms", score: 88 },
    ];

    const attendanceData = [
      { name: "Attendance", value: 65, color: "hsl(var(--chart-1))" },
      { name: "Leave", value: 35, color: "hsl(var(--chart-2))" },
    ];

    const stats = {
      totalStudents: 4,
      totalAttendanceTaken: 2,
      totalLeaveApplied: 2,
      totalSubjects: 1,
    };

    res.json({
      user: {
        name: user.name,
        department: user.department || 'Bachelor of Computer Applications',
      },
      performanceData,
      attendanceData,
      stats,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get admin dashboard data
exports.getAdminDashboard = async (req, res) => {
  try {
    // Mock data for admin dashboard
    const performanceData = [
      { month: "Jan", students: 37, teachers: 25 },
      { month: "Feb", students: 42, teachers: 28 },
      { month: "Mar", students: 35, teachers: 22 },
      { month: "Apr", students: 50, teachers: 32 },
      { month: "May", students: 45, teachers: 30 },
      { month: "Jun", students: 52, teachers: 35 },
    ];

    const issueData = [
      { department: "Academic", resolved: 45, pending: 12 },
      { department: "IT", resolved: 32, pending: 8 },
      { department: "Admin", resolved: 28, pending: 5 },
      { department: "Facility", resolved: 19, pending: 7 },
    ];

    const stats = {
      students: 6825,
      teachers: 654,
      events: 656,
      invoices: 1397,
    };

    res.json({
      performanceData,
      issueData,
      stats,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
