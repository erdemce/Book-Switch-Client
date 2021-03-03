import countryList from "react-select-country-list";

const countries = countryList().getLabels();

const findCountryByShortCode = shortcode =>
  countries.find(country => country.value === shortcode);
export { countries, findCountryByShortCode };