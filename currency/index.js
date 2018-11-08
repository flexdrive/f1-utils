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

let localeSettings;

export function setLocale(locale = 'USD') {
    localeSettings = symbols[locale.toUpperCase()];
    numeral.register('locale', locale, localeSettings);
    numeral.locale(locale);
}

export function format(val, raw = false) {
    return numeral(val).format(raw ? localeSettings.raw : localeSettings.format);
}

export function currencySymbolPosition() {
    return localeSettings.currency.symbolPosition;
}

export function currencySymbol() {
    return localeSettings.currency.symbol;
}