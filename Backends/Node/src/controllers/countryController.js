
const countryList = require('../models/Country');

exports.getCountries = async (req, res) => {
  //const countries = await Country.find();
  const countries = countryList;
  res.json(countries);
};

exports.createCountry = async (req, res) => {
  const newCountry = new Country(req.body);
  await newCountry.save();
  res.status(201).json(newCountry);
};