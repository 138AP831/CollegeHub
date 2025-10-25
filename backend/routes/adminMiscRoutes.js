const express = require('express');
const router = express.Router();
const { getInvoicesCount, getEventsCount } = require('../controllers/adminMiscController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.get('/invoices', protect, authorize('Admin'), getInvoicesCount);
router.get('/events', protect, authorize('Admin'), getEventsCount);

module.exports = router;
