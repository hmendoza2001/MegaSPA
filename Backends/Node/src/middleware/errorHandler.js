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