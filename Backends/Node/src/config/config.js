/**
 * @file Configuration module.
 * @description Holds configuration functionality for the app.
 * @author Hector Mendoza
 * @since 1.0.0
 * @requires dotenv
 */

// load environment variables (or local .env file) into process.env
require('dotenv').config();

// export values
module.exports = {
  port: process.env.PORT || 8000,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET
};