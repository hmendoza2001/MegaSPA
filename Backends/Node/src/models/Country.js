
// just return a hardcoded list for now
// TODO: Fetch these values from DB

class TempCountry {
  constructor(country, value) {
    this.country = country;
    this.value = value;
  }
}

const countryList = [
  new TempCountry("USA", 2025),
  new TempCountry("China", 1882),
  new TempCountry("Japan", 1809),
  new TempCountry("Germany", 1322),
  new TempCountry("UK", 1122),
  new TempCountry("France", 1114),
  new TempCountry("India", 984),
  new TempCountry("Spain", 711),
  new TempCountry("Netherlands", 665),
  new TempCountry("South Korea", 443),
  new TempCountry("Canada", 441)
];

module.exports = countryList;