const express = require('express');
const router = express.Router();
const { getAllIssues, createIssue, updateIssueStatus, updateIssuePriority, getIssueAuditLogs } = require('../controllers/issueController');
const { protect, authorize } = require('../middlewares/authMiddleware');

router.get('/', protect, getAllIssues);
router.post('/', protect, createIssue);
router.put('/:issueId/status', protect, authorize('admin'), updateIssueStatus);
router.put('/:issueId/priority', protect, authorize('admin'), updateIssuePriority);
router.get('/:issueId/audit-logs', protect, authorize('admin'), getIssueAuditLogs);

module.exports = router;
