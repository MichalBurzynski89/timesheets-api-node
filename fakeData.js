const faker = require('faker');
const _ = require('lodash');

const timesheets = _.times(100, n => ({
  id: n,
  user_id: faker.internet.email(),
  date: faker.date.recent(),
  project: faker.random.arrayElement(['StoreZero', 'Auth0 Dashboard']),
  hours: faker.datatype.number({ min: 4, max: 8 }),
  approved: false
}));

module.exports = { timesheets };
