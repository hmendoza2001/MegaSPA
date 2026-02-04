/**
 * @description Main application file, execution starts here. Sets up Express.js
 * app.
 * @author Hector Mendoza
 * @requires Express
 */

// get handles to libraries and modules
const express = require('express');
const config = require('./config/config');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const countryRoutes = require('./routes/countries');

// main app handle
const app = express();

// register middleware
app.use(logger);
app.use(errorHandler);

// register routers (via middleware)
app.use('/v1/countries', countryRoutes);

// map the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// start listening on configured port
app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});