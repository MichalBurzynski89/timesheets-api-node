const express = require('express');
const router = express.Router();
const {
  approveTimesheet,
  getUnapprovedTimesheets
} = require('../controllers/approvalController');

router.put('/:id', approveTimesheet);
router.get('/', getUnapprovedTimesheets);

module.exports = router;
