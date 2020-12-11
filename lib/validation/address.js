"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAddress = validateAddress;
exports.ejemplo = exports.getZipSchema = exports.getStateSchema = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _zip = _interopRequireDefault(require("../regex/zip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getStateSchema = function getStateSchema(_ref) {
  var country = _ref.country;
  return ['US', 'CA'].indexOf(country) > -1 ? Yup.string().trim().required('A state is required').max(2, 'State/Province codes cannot be more than 2 characters long') : Yup.string().ensure();
};

exports.getStateSchema = getStateSchema;

var getZipSchema = function getZipSchema(_ref2) {
  var country = _ref2.country;
  return Yup.string().trim().max(_zip["default"][country].length || 99).matches(_zip["default"][country].regex);
};

exports.getZipSchema = getZipSchema;

var ejemplo = function ejemplo() {
  console.log('PATATAS');
};

exports.ejemplo = ejemplo;

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