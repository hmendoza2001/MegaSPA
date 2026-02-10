/**
 * @file Configuration module.
 * @description Holds configuration functionality for the app.
 * @author Hector Mendoza
 * @requires dotenv
 */

// load environment variables (or local .env file) into process.env
require('dotenv').config();

// export values
module.exports = {
  port: process.env.PORT || 8000,
  atlasUri: process.env.MONGO_ATLAS_URI,
  jwtSecret: process.env.JWT_SECRET
};