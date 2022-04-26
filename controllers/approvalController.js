const { timesheets } = require('../fakeData');

// @desc    Approve timesheet
// @route   PUT /api/approvals/:id
// @access  Private
const approveTimesheet = (req, res) => {
  const entry = timesheets.filter(entry => entry.id == req.params.id)[0];
  entry.approved = true;

  // send the response
  res.status(200).send(entry);
};

// @desc    Get unapproved timesheets
// @route   GET /api/approvals
// @access  Private
const getUnapprovedTimesheets = (req, res) => {
  const unapprovedEntries = timesheets.filter(entry => !entry.approved);

  // send the response
  res.status(200).send(unapprovedEntries);
};

module.exports = {
  approveTimesheet,
  getUnapprovedTimesheets
};
