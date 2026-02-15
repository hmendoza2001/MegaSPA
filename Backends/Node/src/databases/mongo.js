/*
 * Copyright (c) 2026 Hector Mendoza
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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