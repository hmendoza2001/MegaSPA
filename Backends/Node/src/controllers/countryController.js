
const countryService = require('../services/countryService');

const countryController = {
  getCountries: async (req, res) => {
    try
    {
      const countries = await countryService.getAllCountries();
      res.status(200).json(countries);
    }
    catch (error)
    {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = countryController;