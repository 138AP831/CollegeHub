const Invoice = require('../models/Invoice');
const Event = require('../models/Event');

// Get total number of invoices (Admin only)
exports.getInvoicesCount = async (req, res) => {
  try {
    // Optional: Restrict access to admin
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    const totalInvoices = await Invoice.countDocuments();
    res.status(200).json({ totalInvoices });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get total number of events (Admin only)
exports.getEventsCount = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    const totalEvents = await Event.countDocuments();
    res.status(200).json({ totalEvents });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
