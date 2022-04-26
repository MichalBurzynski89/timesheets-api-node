/* eslint-disable no-unused-vars */

const express = require('express');
const colors = require('colors');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;

const app = express();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw new Error(
    'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'.red.underline
  );
}

// Enable CORS
app.use(cors());

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Launch the API Server at localhost:8080
app.listen(port, () => console.log(`Server started on port ${port}`));
