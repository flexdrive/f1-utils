"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = setLocale;

var _numeral = _interopRequireDefault(require("numeral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// TODO: THESE ARE NOT LOCALES AND WILL BE INCORRECT AS SOON AS WE HAVE A 2ND COUNTRY USING EUR
// WITH DIFFERENT FORMATTING RULES. FIX TO USE REAL LOCALES.
var symbols = {
  EUR: {
    delimiters: {
      thousands: '.',
      decimal: ','
    },
    currency: {
      symbol: '€',
      symbolPosition: 'POST'
    },
    abbreviations: {
      thousand: 'k',
      million: 'mm',
      billion: 'b',
      trillion: 't'
    },
    ordinal: function ordinal(number) {
      var b = number % 10;
      return b === 1 || b === 3 ? 'er' : b === 2 ? 'do' : b === 7 || b === 0 ? 'mo' : b === 8 ? 'vo' : b === 9 ? 'no' : 'to';
    },
    format: '0,0.00 $',
    raw: '0,0.00'
  },
  NOK: {
    delimiters: {
      thousands: ' ',
      decimal: ','
    },
    currency: {
      symbol: 'kr',
      symbolPosition: 'POST'
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    ordinal: function ordinal(number) {
      return '.';
    },
    format: '0,0.00 $',
    raw: '0,0.00'
  },
  USD: {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    currency: {
      symbol: '$',
      symbolPosition: 'PRE'
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    ordinal: function ordinal(number) {
      var b = number % 10;
      return ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
    },
    format: '$0,0.00',
    raw: '0,0.00'
  }
}; // eslint-disable-next-line no-unused-vars

function parseLocaleNumber(stringNumber) {
  var thousandSeparator = 1111 .toLocaleString().replace(/1/g, '');
  var decimalSeparator = 1.1.toLocaleString().replace(/1/g, '');
  return parseFloat(stringNumber.replace(new RegExp("\\".concat(thousandSeparator), 'g'), '').replace(new RegExp("\\".concat(decimalSeparator)), '.'));
} // eslint-disable-next-line import/prefer-default-export


function setLocale() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  // If a locale config was found for the specified locale, use it, otherwise default to the 'USD' config.
  var localeSettings = symbols[locale.toUpperCase()] || symbols.USD;

  _numeral["default"].register('locale', locale, localeSettings);

  _numeral["default"].locale(locale);

  var format = function format(val) {
    var raw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var dollars = centsToDollars(val);
    return (0, _numeral["default"])(parseFloat(dollars)).format(raw ? localeSettings.raw : localeSettings.format);
  };

  var currencySymbol = function currencySymbol() {
    return localeSettings.currency.symbol;
  };

  var currencySymbolPosition = function currencySymbolPosition() {
    return _numeral["default"].localeData().currency.symbolPosition;
  };

  var localeDecimal = function localeDecimal() {
    return _numeral["default"].localeData().delimiters.decimal;
  };

  var localeThousands = function localeThousands() {
    return _numeral["default"].localeData().delimiters.thousands;
  };

  var centsToDollars = function centsToDollars() {
    var amt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var value = amt;

    if (typeof amt === 'string') {
      value = parseInt(value);
    }

    if (value === 0) {
      return "".concat(value);
    }

    if (decimals === 0) {
      return "".concat(value / 100);
    }

    return (value / 100).toFixed(decimals);
  };

  var dollarsToCents = function dollarsToCents(amt) {
    var value = typeof amt === 'string' ? parseFloat(amt.replace(localeThousands(), '').replace(localeDecimal(), '.')) : amt;
    return Math.round(100 * value);
  };

  var methods = {
    format: format,
    currencySymbol: currencySymbol,
    currencySymbolPosition: currencySymbolPosition,
    localeDecimal: localeDecimal,
    centsToDollars: centsToDollars,
    dollarsToCents: dollarsToCents
  };
  return methods;
}