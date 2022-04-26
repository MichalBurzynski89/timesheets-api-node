const express = require('express');
const router = express.Router();
const { addTimesheet, getAllTimesheets } = require('../controllers/timesheetController');

router.post('/', addTimesheet);
router.get('/', getAllTimesheets);

module.exports = router;
