const express = require('express');
const router = express.Router();

const {
  checkJwt,
  checkScopes
} = require('../middleware/jwtMiddleware');

const {
  addTimesheet,
  getAllTimesheets
} = require('../controllers/timesheetController');

router.post('/', checkJwt, checkScopes(['create:timesheets']), addTimesheet);
router.get('/', checkJwt, checkScopes(['read:timesheets']), getAllTimesheets);

module.exports = router;
