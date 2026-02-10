/**
 * @description Main application file, execution starts here. Sets up Express.js
 * app.
 * @author Hector Mendoza
 * @requires Express
 */

// get handles to libraries and modules
const express = require('express');
const appConfig = require('./config/appConfig');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const countryRoutes = require('./routes/countryRoutes');
const cors = require('cors');
const server = require('./server');

// main app handle
const app = express();
app.use(cors());

// register middleware
app.use(logger);
app.use(errorHandler);

// register routers (via middleware)
app.use('/v1/countries', countryRoutes);

// initialize server
server.connectToDatabase();

// map the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// start listening on configured port
app.listen(appConfig.port, () => {
  console.log(`Example app listening at http://localhost:${appConfig.port}`);
});