// src/middlewares/logger.js
const logger = (req, res, next) => {
  console.log('Middleware was called');
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;