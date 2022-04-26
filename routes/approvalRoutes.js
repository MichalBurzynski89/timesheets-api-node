const express = require('express');
const router = express.Router();
const { checkJwt } = require('./middleware/jwtMiddleware');
const jwtAuthz = require('express-jwt-authz');
const {
  approveTimesheet,
  getUnapprovedTimesheets
} = require('../controllers/approvalController');

router.put('/:id', checkJwt, jwtAuthz(['approve:timesheets']), approveTimesheet);
router.get('/', checkJwt, jwtAuthz(['approve:timesheets']), getUnapprovedTimesheets);

module.exports = router;
