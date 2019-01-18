"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAddress = validateAddress;
exports.getZipSchema = exports.getStateSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _zip = _interopRequireDefault(require("../regex/zip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var getStateSchema = function getStateSchema(_ref) {
  var state = _ref.state,
      country = _ref.country;
  return ['US', 'CA'].indexOf(country) > -1 ? Yup.string().trim().required('A state is required').max(2, 'State/Province codes cannot be more than 2 characters long') : Yup.string().ensure();
};

exports.getStateSchema = getStateSchema;

var getZipSchema = function getZipSchema(_ref2) {
  var zip = _ref2.zip,
      country = _ref2.country;
  return Yup.string().trim().max(_zip.default[country]['length']).matches(_zip.default[country]['regex']);
};

exports.getZipSchema = getZipSchema;

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

function validateAddress(address) {
  var schema = getAddressSchema(address);

  try {
    schema.validateSync(address);
    return {};
  } catch (error) {
    return error;
  }
}