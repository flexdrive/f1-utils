import * as Yup from 'yup';
import ZipCodeFormats from '../regex/zip';
export var getStateSchema = function getStateSchema(_ref) {
  var state = _ref.state,
      country = _ref.country;
  return ['US', 'CA'].indexOf(country) > -1 ? Yup.string().trim().required('A state is required').max(2, 'State/Province codes cannot be more than 2 characters long') : Yup.string().ensure();
};
export var getZipSchema = function getZipSchema(_ref2) {
  var zip = _ref2.zip,
      country = _ref2.country;
  return Yup.string().trim().max(ZipCodeFormats[country]['length']).matches(ZipCodeFormats[country]['regex']);
};

function getAddressSchema(values) {
  return Yup.object().shape({
    address1: Yup.string().trim().max(255).required(),
    address2: Yup.string().trim().max(255),
    city: Yup.string().trim().max(255),
    state: getStateSchema(values),
    zip: getZipSchema(values),
    country: Yup.string().trim().max(2)
  });
}

export function validateAddress(address) {
  var schema = getAddressSchema(address);

  try {
    schema.validateSync(address);
    return {};
  } catch (error) {
    return error;
  }
}