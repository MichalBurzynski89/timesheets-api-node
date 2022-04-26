const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config(); // eslint-disable-line no-unused-vars
const port = process.env.PORT || 8080;

const app = express();

// Enable CORS
app.use(cors());

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Launch the API Server at localhost:8080
app.listen(port, () => console.log(`Server started on port ${port}`));
