/**
 * @file Main application file where execution starts.
 * @description Main application setup for this Express project.
 * @author Hector Mendoza
 * @requires express, middlewares, config, routes
 */

const express = require('express');
const countryContrtoller = require('../controllers/countryController');

// instantiate express router
const router = express.Router();

// route GET and POST to the appropriate controller
router.get('/', countryContrtoller.getCountries);

module.exports = router;