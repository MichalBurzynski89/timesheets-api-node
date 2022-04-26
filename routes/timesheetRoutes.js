const express = require('express');
const router = express.Router();
const { checkJwt } = require('./middleware/jwtMiddleware');
const jwtAuthz = require('express-jwt-authz');
const { addTimesheet, getAllTimesheets } = require('../controllers/timesheetController');

router.post('/', checkJwt, jwtAuthz(['create:timesheets']), addTimesheet);
router.get('/', checkJwt, jwtAuthz(['read:timesheets']), getAllTimesheets);

module.exports = router;
