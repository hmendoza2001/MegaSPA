/*
 * Copyright (c) 2025 Hector Mendoza
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
 * @description Middleware functions are called automatically upon registration.
 * This one handles errors.
 * @author Hector Mendoza
 * @requires Express
 */

/**
 * Handles error message when server error (500) occurs.
 *
 * @param {Object} err Error object
 * @param {Object} req Handle to request
 * @param {Object} res Handle to response
 * @param {Object} next Handle to next registered entry.
 */
const errorHandler = (err, req, res, next) => {
  console.log(`Middleware errorHandler was called... Error: {err.message}`);
  res.status(err.status || 500).json({ message: err.message || "Server Error" });
};

module.exports = errorHandler;