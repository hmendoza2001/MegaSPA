const Country = require('../models/Country');

const countryService = {
getAllCountries: async () =>
{
  try
  {
    return await Country.find({}, { _id:0 });
  }
  catch (error)
  {
    console.log("Error fetching countries " + error);
    throw new Error("Error fetching countries " + error);
  }
}
};
module.exports = countryService;