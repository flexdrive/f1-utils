"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = setLocale;

var _numeral = _interopRequireDefault(require("numeral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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