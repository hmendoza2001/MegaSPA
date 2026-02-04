/**
 * @file Main application file where execution starts.
 * @description Main application setup for this Express project.
 * @author Hector Mendoza
 * @since 1.0.0
 * @requires express, middlewares, config, routes
 */

const express = require('express');
const { getCountries, createCountry } = require('../controllers/countryController');

// instantiate express router
const router = express.Router();

// route GET and POST to the appropriate controller
router.get('/', getCountries);
router.post('/', createCountry);

module.exports = router;