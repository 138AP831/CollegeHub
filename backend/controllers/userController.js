const User = require('../models/User'); // Single user model

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // fetch all users regardless of role
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get current logged-in user
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
