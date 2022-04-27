const express = require('express');
const router = express.Router();

const {
  checkJwt,
  checkScopes
} = require('../middleware/jwtMiddleware');

const {
  approveTimesheet,
  getUnapprovedTimesheets
} = require('../controllers/approvalController');

router.put('/:id', checkJwt, checkScopes(['approve:timesheets']), approveTimesheet);
router.get('/', checkJwt, checkScopes(['approve:timesheets']), getUnapprovedTimesheets);

module.exports = router;
