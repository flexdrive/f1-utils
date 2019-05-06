const numeral = require('numeral');

const symbols = {
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

function parseLocaleNumber(stringNumber) {
    var thousandSeparator = (1111).toLocaleString().replace(/1/g, '');
    var decimalSeparator = (1.1).toLocaleString().replace(/1/g, '');

    return parseFloat(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );
}

export function setLocale(locale = 'USD') {
    // If a locale config was found for the specified locale, use it, otherwise default to the 'USD' config.
    const localeSettings = symbols[locale.toUpperCase()] || symbols['USD'];
    numeral.register('locale', locale, localeSettings);
    numeral.locale(locale);

    const format = function (val, raw = false) {
        const dollars = centsToDollars(val);
        return numeral(parseFloat(dollars)).format(raw ? localeSettings.raw : localeSettings.format);
    };

    const currencySymbol = function () {
        return localeSettings.currency.symbol;
    };

    const currencySymbolPosition = function () {
        return numeral.localeData().currency.symbolPosition;
    };

    const localeDecimal = function () {
        return numeral.localeData().delimiters.decimal;
    };

    const localeThousands = function () {
        return numeral.localeData().delimiters.thousands;
    };

    const centsToDollars = function (amt = 0, decimals = 2) {
        let value = amt;

        if (typeof amt === 'string') {
            value = parseInt(value);
        }

        if (value === 0) {
            return `${value}`;
        }

        if (decimals === 0) {
            return `${(value / 100)}`;
        }

        return (value / 100).toFixed(decimals);
    };

    const dollarsToCents = function (amt) {
        const value = typeof amt === 'string'
            ? parseFloat(amt.replace(localeThousands(), '').replace(localeDecimal(), '.'))
            : amt;

        return Math.round(100 * value);
    }

    const methods = {
        format,
        currencySymbol,
        currencySymbolPosition,
        localeDecimal,
        centsToDollars,
        dollarsToCents
    }

    return methods;
}