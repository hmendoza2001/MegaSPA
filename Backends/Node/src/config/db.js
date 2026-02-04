/**
 * @file Database configuration.
 * @description Contains configuration for our database connections.
 * @author Hector Mendoza
 * @since 1.0.0
 * @requires mongoose, config
 */

const mongoose = require('mongoose');
const { mongoURI } = require('./config');

/**
 * Connects to database.
 */
const connectDB = async () => {
  try
  {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected');
  }
  catch (err)
  {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;