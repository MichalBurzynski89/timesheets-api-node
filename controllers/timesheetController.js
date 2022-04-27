const { timesheets } = require('../fakeData');

// @desc    Add a new timesheet
// @route   POST /api/timesheets
// @access  Private
const addTimesheet = (req, res) => {
  const timesheet = req.body;

  // determine id for the new timesheet
  const max = Math.max(...timesheets.map(({ id }) => id));
  timesheet.id = max + 1;
  timesheet.user_id = req.auth['https://api.exampleco.com/email'];
  timesheet.approved = false;

  // append the timesheet
  timesheets.push(timesheet);

  // send the response
  res.status(201).send(timesheet);
};

// @desc    Get all timesheets
// @route   GET /api/timesheets
// @access  Private
const getAllTimesheets = (req, res) => {
  // Get timesheet entries for this user
  const userEntries = timesheets.filter(
    entry => entry.user_id === req.auth['https://api.exampleco.com/email']
  );

  // send the response
  res.status(200).send(userEntries);
};

module.exports = {
  addTimesheet,
  getAllTimesheets
};
