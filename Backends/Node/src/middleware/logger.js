
const logger = (req, res, next) => {
  console.log("Middleware logger was called...");
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;