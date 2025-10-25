// Sample data for testing the College Hub application
// Run this file to populate the database with sample users and data

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Course = require('./models/Course');
const Attendance = require('./models/Attendance');
const Timetable = require('./models/Timetable');
const Notification = require('./models/Notification');
const Issue = require('./models/Issue');
const Event = require('./models/Event');
const Leave = require('./models/Leave');
const Invoice = require('./models/Invoice');

require('dotenv').config();

const sampleData = {
  // Sample Users
  users: [
  {
    name: "ANUGULA PRASUNA",
    email: "ugs23071_aids.prasuna@cbit.org.in",
    password: "Toq52744",
    role: "student",
    rollNo: "1601-23-771-071",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2005-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "ANUSHKA PERUVEL",
    email: "ugs23072_aids.anushka@cbit.org.in",
    password: "Cuh39829",
    role: "student",
    rollNo: "1601-23-771-072",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2006-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "BAKKA VAISHNAVI",
    email: "ugs23073_aids.vaishnavi@cbit.org.in",
    password: "Guz96579",
    role: "student",
    rollNo: "1601-23-771-073",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2005-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "BANOTH VRINDA",
    email: "ugs23074_aids.vrinda@cbit.org.in",
    password: "Zof26108",
    role: "student",
    rollNo: "1601-23-771-074",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2006-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "CHERUKU SIRLATHA",
    email: "ugs23075_aids.sirlatha@cbit.org.in",
    password: "Wod64201",
    role: "student",
    rollNo: "1601-23-771-075",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2005-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "CHILLA DEEKSHITHA",
    email: "ugs23076_aids.deekshitha@cbit.org.in",
    password: "Yup55243",
    role: "student",
    rollNo: "1601-23-771-076",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2006-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "DANGI ANUDESAI",
    email: "ugs23077_aids.anudesai@cbit.org.in",
    password: "Cur30382",
    role: "student",
    rollNo: "1601-23-771-077",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2005-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "DODDIGARLA AKHILA",
    email: "ugs23078_aids.akhila@cbit.org.in",
    password: "Koy96497",
    role: "student",
    rollNo: "1601-23-771-078",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2006-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "GUMMADI SAHASRA REDDY",
    email: "ugs23079_aids.sahasra@cbit.org.in",
    password: "Rok93118",
    role: "student",
    rollNo: "1601-23-771-079",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2005-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "JANGAM MALLIKA",
    email: "ugs23080_aids.mallika@cbit.org.in",
    password: "Day60349",
    role: "student",
    rollNo: "1601-23-771-080",
    course: "Artificial Intelligence and Data Science",
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567890",
    address: "CBIT Hyd",
    dob: new Date("2006-01-15"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/john.jpg"
  },
  {
    name: "Anjum Nabi Sheikh",
    email: "anjumnabisheikh_aids@cbit.ac.in",
    password: "password123",
    role: "teacher",
    rollNo: null,
    course: null,
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567892",
    address: "789 Faculty Housing, City, State",
    dob: new Date("1980-08-10"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/robert.jpg"
  },
  {
    name: "SHEENA MOHAMMED",
    email: "sheena_it@cbit.ac.in",
    password: "password123",
    role: "teacher",
    rollNo: null,
    course: null,
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567892",
    address: "789 Faculty Housing, City, State",
    dob: new Date("1980-08-10"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/robert.jpg"
  },
  {
    name: "V.K. ARAVINDA",
    email: "krishnaaravinda_aids@cbit.ac.in",
    password: "password123",
    role: "teacher",
    rollNo: null,
    course: null,
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567892",
    address: "789 Faculty Housing, City, State",
    dob: new Date("1980-08-10"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/robert.jpg"
  },
  {
    name: "Talla Sai Sree",
    email: "saisreetalla_aids@cbit.ac.in",
    password: "password123",
    role: "teacher",
    rollNo: null,
    course: null,
    department: "Artificial Intelligence and Data Science",
    contact: "+1234567892",
    address: "789 Faculty Housing, City, State",
    dob: new Date("1980-08-10"),
    subjects: ["Data Structures", "Algorithms", "Database Management"],
    profilePicUrl: "/uploads/profiles/robert.jpg"
  },
  {
    name: "Admin User",
    email: "admin@college.edu",
    password: "admin123",
    role: "admin",
    rollNo: null,
    course: null,
    department: "Administration",
    contact: "+1234567894",
    address: "Admin Office, College Campus",
    dob: new Date("1970-01-01"),
    subjects: [],
    profilePicUrl: "/uploads/profiles/admin.jpg"
  }
  ],

  // Sample Courses
  courses: [
  {
    courseCode: "22AIC5T02",
    courseName: "Introduction to Data Science",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 4,
    description: "Explores data science techniques with intelligent systems integration.",
    syllabus: "Data preprocessing, Feature engineering, ML models, Evaluation metrics, Case studies",
    schedule: [
      { day: "Monday", time: "09:20 AM", room: "AD-303", type: "Lecture" },
      { day: "Tuesday", time: "09:20 AM", room: "AD-303", type: "Lecture" },
      { day: "Thursday", time: "09:20 AM", room: "AD-303", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5T03",
    courseName: "Artificial Intelligence ",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 4,
    description: "Foundational concepts and techniques in artificial intelligence.",
    syllabus: "Search algorithms, Knowledge representation, Reasoning, Planning, Learning",
    schedule: [
      { day: "Monday", time: "10:20 AM", room: "AD-303", type: "Lecture" },
      { day: "Wednesday", time: "10:20 AM", room: "AD-303", type: "Lecture" },
      { day: "Thursday", time: "10:20 AM", room: "AD-303", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5T04",
    courseName: "Software Engineering",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 4,
    description: "Principles and practices of software development lifecycle.",
    syllabus: "SDLC models, Requirements, Design, Testing, Maintenance, Agile methods",
    schedule: [
      { day: "Tuesday", time: "10:20 AM", room: "AD-303", type: "Lecture" },
      { day: "Wednesday", time: "09:20 AM", room: "AD-303", type: "Lecture" },
      { day: "Friday", time: "09:20 AM", room: "AD-303", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5T05",
    courseName: "Computer Networks and Security",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 4,
    description: "Study of algorithm design techniques and analysis of their efficiency.",
    syllabus: "Divide and Conquer, Greedy Algorithms, Dynamic Programming, Graph Algorithms, NP-Completeness",
    schedule: [
      { day: "Monday", time: "11:10 AM", room: "AD-303", type: "Lecture" },
      { day: "Wednesday", time: "11:10 AM", room: "AD-303", type: "Lecture" },
      { day: "Friday", time: "10:20 AM", room: "AD-303", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5T06",
    courseName: "Enterprise Application Development",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 3,
    description: "Encourages innovation and entrepreneurial mindset through design thinking.",
    syllabus: "Ideation, Prototyping, Business models, Innovation strategies, Case studies",
    schedule: [
      { day: "Tuesday", time: "11:10 AM", room: "AD-303", type: "Lecture" },
      { day: "Thursday", time: "11:10 AM", room: "AD-303", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5T07",
    courseName: "CyberSecurity",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 2,
    description: "Understanding environmental systems and sustainability practices.",
    syllabus: "Ecosystems, Pollution, Climate change, Environmental policies, Sustainability",
    schedule: [
      { day: "Friday", time: "11:10 AM", room: "AD-303", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5L01",
    courseName: "CC",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 2,
    description: "Lab course on cloud computing and sustainable computing practices.",
    syllabus: "Virtualization, Cloud platforms, Energy-efficient computing, Deployment",
    schedule: [
      { day: "Monday", time: "01:30 PM", room: "Lab", type: "Lab" },
      { day: "Tuesday", time: "01:30 PM", room: "Lab", type: "Lab" }
    ]
  },
  {
    courseCode: "22AIC5P08",
    courseName: "IDS Lab",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 2,
    description: "Hands-on lab for Intelligent Data Science applications.",
    syllabus: "Data wrangling, ML pipelines, Visualization, Model tuning",
    schedule: [
      { day: "Wednesday", time: "01:30 PM", room: "Lab", type: "Lab" }
    ]
  },
  {
    courseCode: "22AIC5P09",
    courseName: "AI Principles Lab",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 2,
    description: "Lab sessions for implementing AI algorithms and models.",
    syllabus: "Search algorithms, Decision trees, Neural networks, Evaluation",
    schedule: [
      { day: "Thursday", time: "01:30 PM", room: "Lab", type: "Lab" }
    ]
  },
  {
    courseCode: "22AIC5S10",
    courseName: "Library",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 0,
    description: "Scheduled library hours for academic enrichment.",
    syllabus: "Reading, Reference, Research support",
    schedule: [
      { day: "Friday", time: "01:30 PM", room: "Library", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5S11",
    courseName: "Mentoring",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 0,
    description: "Mentorship sessions for academic and personal guidance.",
    syllabus: "Goal setting, Feedback, Career planning",
    schedule: [
      { day: "Saturday", time: "09:20 AM", room: "AD-303", type: "Lecture" }
    ]
  },
  {
    courseCode: "22AIC5S12",
    courseName: "Club Activity",
    department: "Artificial Intelligence and Data Science",
    semester: 5,
    credits: 0,
    description: "Participation in departmental clubs and extracurricular activities.",
    syllabus: "Technical events, Hackathons, Seminars, Outreach",
    schedule: [
      { day: "Saturday", time: "10:20 AM", room: "AD-303", type: "Lecture" }
    ]
  }
  ],

  // Sample Events
  events: [
    {
      title: "Tech Fest 2024",
      description: "Annual technical festival with competitions and workshops",
      date: new Date("2024-03-15"),
      startTime: "9:00 AM",
      endTime: "6:00 PM",
      location: "Main Auditorium",
      type: "technical",
      targetAudience: "all",
      capacity: 500,
      tags: ["technical", "competition", "workshop"]
    },
    {
      title: "Career Guidance Seminar",
      description: "Seminar on career opportunities in tech industry",
      date: new Date("2024-03-20"),
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      location: "Seminar Hall",
      type: "academic",
      targetAudience: "students",
      capacity: 200,
      tags: ["career", "guidance", "industry"]
    }
  ],

  // Sample Notifications
  notifications: [
    {
      title: "Academic",
      content: "Summer training internship with Live Project",
      type: "announcement",
      targetAudience: "students",
      priority: "high"
    },
    {
      title: "Co-curricular",
      content: "Global Internship opportunity by Student organization",
      type: "announcement",
      targetAudience: "students",
      priority: "medium"
    },
    {
      title: "Examination",
      content: "Instructions for Mid Term Examination",
      type: "reminder",
      targetAudience: "all",
      priority: "high"
    }
  ],

  // Sample Issues
  issues: [
    // Student Issues
    {
      id: "STU001",
      title: "Attendance Not Marked for Data Structures Class",
      description: "My attendance for the Data Structures lecture on Monday was not recorded despite being present",
      priority: "P3",
      department: "Academic Affairs",
      issueType: "Academic",
      status: "Open",
      openedBy: "ANUGULA PRASUNA",
      auditLogs: [
        { action: "Issue created", user: "ANUGULA PRASUNA", details: "Reported missing attendance for Data Structures" },
        { action: "Priority set to P3", user: "Admin User", details: "Low priority attendance issue" }
      ]
    },
    {
      id: "STU002",
      title: "Unable to Access Course Materials",
      description: "Cannot download lecture notes for Artificial Intelligence course from the portal",
      priority: "P2",
      department: "IT",
      issueType: "Technical",
      status: "In Progress",
      openedBy: "ANUSHKA PERUVEL",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "ANUSHKA PERUVEL", details: "Access denied to course materials" },
        { action: "Priority set to P2", user: "Admin User", details: "Medium priority technical issue" },
        { action: "Status changed to In Progress", user: "Admin User", details: "IT team assigned to investigate" }
      ]
    },
    {
      id: "STU003",
      title: "Timetable Showing Wrong Schedule",
      description: "My timetable displays incorrect timings for Software Engineering lab sessions",
      priority: "P2",
      department: "Academic Affairs",
      issueType: "Academic",
      status: "Resolved",
      openedBy: "BAKKA VAISHNAVI",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "BAKKA VAISHNAVI", details: "Incorrect timetable display" },
        { action: "Priority set to P2", user: "Admin User", details: "Medium priority scheduling issue" },
        { action: "Status changed to Resolved", user: "Admin User", details: "Timetable corrected and updated" }
      ]
    },
    {
      id: "STU004",
      title: "Assignment Submission Portal Down",
      description: "Cannot submit assignments for Enterprise Application Development course",
      priority: "P1",
      department: "IT",
      issueType: "Technical",
      status: "Open",
      openedBy: "BANOTH VRINDA",
      auditLogs: [
        { action: "Issue created", user: "BANOTH VRINDA", details: "Assignment submission portal inaccessible" },
        { action: "Priority set to P1", user: "Admin User", details: "High priority as it affects coursework submission" }
      ]
    },

    // Teacher Issues
    {
      id: "TEA001",
      title: "Student Attendance Records Not Updating",
      description: "Attendance marked in class is not reflecting in the system for my courses",
      priority: "P2",
      department: "IT",
      issueType: "Technical",
      status: "In Progress",
      openedBy: "Anjum Nabi Sheikh",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "Anjum Nabi Sheikh", details: "Attendance records not syncing" },
        { action: "Priority set to P2", user: "Admin User", details: "Medium priority data sync issue" },
        { action: "Status changed to In Progress", user: "Admin User", details: "Database team investigating sync problems" }
      ]
    },
    {
      id: "TEA002",
      title: "Unable to Upload Grades",
      description: "Grade upload feature is not working for the mid-term examinations",
      priority: "P1",
      department: "IT",
      issueType: "Technical",
      status: "Open",
      openedBy: "SHEENA MOHAMMED",
      auditLogs: [
        { action: "Issue created", user: "SHEENA MOHAMMED", details: "Grade upload functionality broken" },
        { action: "Priority set to P1", user: "Admin User", details: "High priority as it affects student evaluations" }
      ]
    },
    {
      id: "TEA003",
      title: "Classroom Projector Malfunctioning",
      description: "Projector in AD-303 is not working during lectures",
      priority: "P3",
      department: "Facilities",
      issueType: "Facility",
      status: "Resolved",
      openedBy: "V.K. ARAVINDA",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "V.K. ARAVINDA", details: "Projector in AD-303 not functioning" },
        { action: "Priority set to P3", user: "Admin User", details: "Low priority equipment issue" },
        { action: "Status changed to Resolved", user: "Admin User", details: "Projector repaired and tested" }
      ]
    },
    {
      id: "TEA004",
      title: "Online Exam Platform Issues",
      description: "Students unable to access online exams due to platform connectivity problems",
      priority: "P1",
      department: "IT",
      issueType: "Technical",
      status: "In Progress",
      openedBy: "Talla Sai Sree",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "Talla Sai Sree", details: "Online exam platform connectivity issues" },
        { action: "Priority set to P1", user: "Admin User", details: "High priority exam disruption" },
        { action: "Status changed to In Progress", user: "Admin User", details: "Network team working on connectivity" }
      ]
    },

    // Admin Issues (reflecting student and teacher issues)
    {
      id: "ADM001",
      title: "Investigating Attendance Tracking Issues",
      description: "Multiple reports from students and teachers about attendance not being recorded properly (STU001, TEA001). Need to audit attendance system and database sync.",
      priority: "P2",
      department: "IT",
      issueType: "Technical",
      status: "In Progress",
      openedBy: "Admin User",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "Admin User", details: "Escalated from student and teacher attendance complaints" },
        { action: "Priority set to P2", user: "Admin User", details: "Medium priority as it affects multiple users" },
        { action: "Status changed to In Progress", user: "Admin User", details: "IT team auditing attendance database and sync processes" }
      ]
    },
    {
      id: "ADM002",
      title: "Resolving Course Material Access Problems",
      description: "Students unable to download lecture notes (STU002). Investigating file permissions and server access controls.",
      priority: "P2",
      department: "IT",
      issueType: "Technical",
      status: "In Progress",
      openedBy: "Admin User",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "Admin User", details: "Following up on student access issue STU002" },
        { action: "Priority set to P2", user: "Admin User", details: "Medium priority technical access issue" },
        { action: "Status changed to In Progress", user: "Admin User", details: "Checking file server permissions and CDN configuration" }
      ]
    },
    {
      id: "ADM003",
      title: "Fixing Assignment Submission Portal",
      description: "Assignment submission system down affecting coursework (STU004). Investigating server overload and database connection issues.",
      priority: "P1",
      department: "IT",
      issueType: "Technical",
      status: "In Progress",
      openedBy: "Admin User",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "Admin User", details: "Critical issue from student report STU004" },
        { action: "Priority set to P1", user: "Admin User", details: "High priority as it blocks coursework submission" },
        { action: "Status changed to In Progress", user: "Admin User", details: "Server team investigating database connections and load balancing" }
      ]
    },
    {
      id: "ADM004",
      title: "Resolving Grade Upload Functionality",
      description: "Teachers unable to upload grades for mid-term exams (TEA002). Checking grade submission API and database write permissions.",
      priority: "P1",
      department: "IT",
      issueType: "Technical",
      status: "In Progress",
      openedBy: "Admin User",
      resolver: "Admin User",
      auditLogs: [
        { action: "Issue created", user: "Admin User", details: "Escalated from teacher issue TEA002" },
        { action: "Priority set to P1", user: "Admin User", details: "High priority as it affects student evaluations" },
        { action: "Status changed to In Progress", user: "Admin User", details: "Development team debugging grade upload API endpoints" }
      ]
    }
  ]
};

async function populateDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Attendance.deleteMany({});
    await Timetable.deleteMany({});
    await Notification.deleteMany({});
    await Issue.deleteMany({});
    await Event.deleteMany({});
    await Leave.deleteMany({});
    await Invoice.deleteMany({});
    console.log('🧹 Cleared existing data');

    // Hash passwords and create users
    const hashedUsers = await Promise.all(
      sampleData.users.map(async (user) => ({
        ...user,
        passwordHash: await bcrypt.hash(user.password, 10)
      }))
    );

    const createdUsers = await User.insertMany(hashedUsers);
    console.log('👥 Created users:', createdUsers.length);

    // Create courses with teacher references
    const teacher = createdUsers.find(u => u.role === 'teacher');
    const students = createdUsers.filter(u => u.role === 'student');

    const coursesWithRefs = sampleData.courses.map(course => ({
      ...course,
      teacher: teacher._id,
      students: students.map(s => s._id)
    }));

    const createdCourses = await Course.insertMany(coursesWithRefs);
    console.log('📚 Created courses:', createdCourses.length);

    // Create events with organizer reference
    const admin = createdUsers.find(u => u.role === 'admin');
    const eventsWithRefs = sampleData.events.map(event => ({
      ...event,
      organizer: admin._id
    }));

    const createdEvents = await Event.insertMany(eventsWithRefs);
    console.log('📅 Created events:', createdEvents.length);

    // Create notifications with creator reference
    const notificationsWithRefs = sampleData.notifications.map(notification => ({
      ...notification,
      createdBy: admin._id
    }));

    const createdNotifications = await Notification.insertMany(notificationsWithRefs);
    console.log('🔔 Created notifications:', createdNotifications.length);

    // Create issues
    const createdIssues = await Issue.insertMany(sampleData.issues);
    console.log('🐛 Created issues:', createdIssues.length);

    // Create sample attendance records
    const attendanceRecords = [];
    const subjects = ["Data Structures", "Database Management", "Computer Networks"];

    for (const student of students) {
      for (const subject of subjects) {
        for (let i = 0; i < 10; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          attendanceRecords.push({
            studentId: student._id,
            subject,
            date,
            status: Math.random() > 0.1 ? 'present' : 'absent',
            markedBy: teacher._id
          });
        }
      }
    }

    await Attendance.insertMany(attendanceRecords);
    console.log('📊 Created attendance records:', attendanceRecords.length);

    // Create timetable entries
    const timetableEntries = [];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    for (const course of createdCourses) {
      for (const schedule of course.schedule) {
        timetableEntries.push({
          course: course.courseCode,
          subject: course.courseName,
          day: schedule.day,
          time: schedule.time,
          room: schedule.room,
          teacher: course.teacher,
          type: schedule.type
        });
      }
    }

    await Timetable.insertMany(timetableEntries);
    console.log('📋 Created timetable entries:', timetableEntries.length);

    console.log('\n🎉 Database populated successfully!');
    console.log('\n📋 Login Credentials:');
    console.log('Student: john.doe@student.college.edu / password123');
    console.log('Student: jane.smith@student.college.edu / password123');
    console.log('Teacher: robert.johnson@college.edu / password123');
    console.log('Teacher: sarah.wilson@college.edu / password123');
    console.log('Admin: admin@college.edu / admin123');

  } catch (error) {
    console.error('❌ Error populating database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
}

// Run if called directly
if (require.main === module) {
  populateDatabase();
}

module.exports = { populateDatabase, sampleData };
