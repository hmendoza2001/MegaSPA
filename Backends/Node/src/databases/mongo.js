/**
 * @file Database configuration.
 * @description Contains configuration for our database connections.
 * @author Hector Mendoza
 * @requires mongoose, config
 */

const mongoose = require('mongoose');

// Note: Example with an Atlas SRV connection string (recommended for MongoDB Atlas)
// const atlasUri = "mongodb+srv://<user>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority";
const { atlasUri } = require('../config/appConfig');

/**
 * Establishes database connection.
 */
async function connectToDatabase() {
  try
  {
    // Connect the client to the server
    mongoose.connect(atlasUri);
    console.log("Connected to MongoDB successfully! Connection pool ready.");
  }
  catch (error)
  {
    console.error("Could not connect to MongoDB", error);
    process.exit(1);
  }
}

module.exports = { connectToDatabase };