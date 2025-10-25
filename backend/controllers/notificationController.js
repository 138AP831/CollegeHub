const Notification = require('../models/Notification');

// Create a notification (Admin only)
exports.createNotification = async (req, res) => {
  try {
    const { title, message, targetRole } = req.body;
    const notification = await Notification.create({ title, message, targetRole });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get notifications for user role
exports.getNotifications = async (req, res) => {
  try {
    const role = req.user.role;
    const notifications = await Notification.find({
      $or: [{ targetRole: role }, { targetRole: 'All' }]
    }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
