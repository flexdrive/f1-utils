(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.f1utils = {})));
}(this, (function (exports) { 'use strict';

    var numeral = require('numeral');

    var symbols = {
      'NOK': {
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
      'USD': {
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
    };
    function setLocale() {
      var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
      var localeSettings = symbols[locale.toUpperCase()];
      numeral.register('locale', locale, localeSettings);
      numeral.locale(locale);

      var format = function format(val) {
        var raw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var dollars = centsToDollars(val);
        return numeral(parseFloat(dollars)).format(raw ? localeSettings.raw : localeSettings.format);
      };

      var currencySymbol = function currencySymbol() {
        return localeSettings.currency.symbol;
      };

      var currencySymbolPosition = function currencySymbolPosition() {
        return numeral.localeData().currency.symbolPosition;
      };

      var localeDecimal = function localeDecimal() {
        return numeral.localeData().delimiters.decimal;
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
        var value = typeof amt === 'string' ? parseFloat(amt.replace(localeDecimal(), '.')) : amt;
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

    var index = /*#__PURE__*/Object.freeze({
        setLocale: setLocale
    });

    exports.Currency = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map