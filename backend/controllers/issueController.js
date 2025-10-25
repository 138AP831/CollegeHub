const Issue = require('../models/Issue');
const User = require('../models/User');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOAD_DIR || 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only images and PDFs are allowed'));
    }
  }
});

// Get all issues
exports.getAllIssues = async (req, res) => {
  try {
    const issues = [
      { id: "4103MO", title: "Backend Word Editor Not Working", description: "The backend word editor crashes when opening large documents", priority: "P2", department: "IT", issueType: "Technical", status: "Open", openedBy: "James", openedOn: "2/1/2022", resolver: "Omid", auditLogs: [{ timestamp: "2/1/2022 10:00 AM", action: "Issue created", user: "James" }, { timestamp: "2/1/2022 10:30 AM", action: "Assigned to Omid", user: "Admin" }] },
      { id: "9634MD", title: "Login System Unusual Result", description: "Users getting unusual error when logging in with correct credentials", priority: "P1", department: "IT", issueType: "Technical", status: "In Progress", openedBy: "Kim", openedOn: "2/2/2022", resolver: "Omid", auditLogs: [{ timestamp: "2/2/2022 09:00 AM", action: "Issue created", user: "Kim" }, { timestamp: "2/2/2022 09:15 AM", action: "Priority changed to P1", user: "Admin" }, { timestamp: "2/2/2022 09:30 AM", action: "Status changed to In Progress", user: "Admin" }] },
      { id: "7912HW", title: "Library AC Not Working", description: "Air conditioning system malfunctioning in library reading room", priority: "P3", department: "Facility", issueType: "Facility", status: "Open", openedBy: "Lilly", openedOn: "2/4/2022", resolver: "Kim", auditLogs: [{ timestamp: "2/4/2022 11:00 AM", action: "Issue created", user: "Lilly" }] },
      { id: "1605DD", title: "Assignment Submission Issue", description: "Cannot submit assignments through the portal, keeps showing error", priority: "P0", department: "Academic", issueType: "Academic", status: "In Progress", openedBy: "Alex", openedOn: "2/4/2022", resolver: "Ted", auditLogs: [{ timestamp: "2/4/2022 08:00 AM", action: "Issue created", user: "Alex" }, { timestamp: "2/4/2022 08:10 AM", action: "Priority escalated to P0", user: "Admin" }, { timestamp: "2/4/2022 08:20 AM", action: "Assigned to Ted", user: "Admin" }] },
      { id: "3219OQ", title: "Projector Malfunction Room 305", description: "Projector in Room 305 not displaying properly", priority: "P2", department: "Facility", issueType: "Facility", status: "Resolved", openedBy: "Prof. Smith", openedOn: "1/28/2022", resolver: "Lilly", auditLogs: [{ timestamp: "1/28/2022 02:00 PM", action: "Issue created", user: "Prof. Smith" }, { timestamp: "1/30/2022 10:00 AM", action: "Status changed to Resolved", user: "Lilly" }] },
    ];

    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new issue
exports.createIssue = [
  upload.array('files', 5), // Allow up to 5 files
  async (req, res) => {
    try {
      const { title, description, priority, department, issueType } = req.body;
      const userId = req.user.id;

      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

      const issueId = Math.random().toString(36).substr(2, 6).toUpperCase();

      const newIssue = {
        id: issueId,
        title,
        description,
        priority,
        department,
        issueType,
        status: "Open",
        openedBy: user.name,
        openedOn: new Date().toLocaleDateString(),
        auditLogs: [{
          timestamp: new Date().toLocaleString(),
          action: "Issue created",
          user: user.name
        }]
      };

      // In a real implementation, save to database
      console.log('New issue created:', newIssue);
      console.log('Uploaded files:', req.files);

      res.status(201).json({
        success: true,
        issue: newIssue,
        files: req.files?.map(file => ({
          name: file.originalname,
          size: file.size,
          url: `/uploads/${file.filename}`
        })) || []
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
];

// Update issue status
exports.updateIssueStatus = async (req, res) => {
  try {
    const { issueId } = req.params;
    const { status } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // In a real implementation, update the issue in database
    console.log(`Issue ${issueId} status updated to ${status} by ${user.name}`);

    res.json({
      success: true,
      message: "Status updated successfully",
      auditLog: {
        timestamp: new Date().toLocaleString(),
        action: `Status changed to ${status}`,
        user: user.name
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update issue priority
exports.updateIssuePriority = async (req, res) => {
  try {
    const { issueId } = req.params;
    const { priority } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // In a real implementation, update the issue in database
    console.log(`Issue ${issueId} priority updated to ${priority} by ${user.name}`);

    res.json({
      success: true,
      message: "Priority updated successfully",
      auditLog: {
        timestamp: new Date().toLocaleString(),
        action: `Priority changed to ${priority}`,
        user: user.name
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get issue audit logs
exports.getIssueAuditLogs = async (req, res) => {
  try {
    const { issueId } = req.params;

    // Mock audit logs - in real implementation, fetch from database
    const auditLogs = [
      { timestamp: "2/1/2022 10:00 AM", action: "Issue created", user: "James" },
      { timestamp: "2/1/2022 10:30 AM", action: "Assigned to Omid", user: "Admin" },
      { timestamp: "2/2/2022 09:15 AM", action: "Priority changed to P1", user: "Admin" }
    ];

    res.json(auditLogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
