# timesheets-api-node
Timesheet API for a fictitious company named ExampleCo. The API allows adding timesheet entries for an employee or a contractor.

### How to run API
1. To run the API, you must first create a `.env` file and set two variables in it: `AUTH0_DOMAIN` (the domain of your Auth0 account) and `AUTH0_AUDIENCE` (unique identifier for the API, available at Auth0 Dashboard > APIs).
2. The API works on port 8080 by default, you can set a different value in the `.env` file.
3. Use `npm run dev` to see the changes live.
