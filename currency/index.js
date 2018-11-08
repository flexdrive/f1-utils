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
    const dollars = centsToDollars(val);
    return numeral(parseFloat(dollars)).format(raw ? localeSettings.raw : localeSettings.format);
}

export function currencySymbolPosition() {
    return localeSettings.currency.symbolPosition;
}

export function currencySymbol() {
    return localeSettings.currency.symbol;
}

function localeDecimal() {
    return localeSettings.delimiters.decimal;
}

export function centsToDollars(amt = 0, decimals = 2) {
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
}

export function dollarsToCents(amt) {
    const value = typeof amt === 'string'
        ? parseFloat(amt.replace(localeDecimal(), '.'))
        : amt;

    return Math.round(100 * value);
}