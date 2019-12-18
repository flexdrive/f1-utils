import numeral from 'numeral'

// TODO: THESE ARE NOT LOCALES AND WILL BE INCORRECT AS SOON AS WE HAVE A 2ND COUNTRY USING EUR
// WITH DIFFERENT FORMATTING RULES. FIX TO USE REAL LOCALES.
const symbols = {
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
    ordinal: function(number) {
      var b = number % 10
      return b === 1 || b === 3
        ? 'er'
        : b === 2
        ? 'do'
        : b === 7 || b === 0
        ? 'mo'
        : b === 8
        ? 'vo'
        : b === 9
        ? 'no'
        : 'to'
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
    ordinal: function(number) {
      return '.'
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
    ordinal: function(number) {
      var b = number % 10
      return ~~((number % 100) / 10) === 1
        ? 'th'
        : b === 1
        ? 'st'
        : b === 2
        ? 'nd'
        : b === 3
        ? 'rd'
        : 'th'
    },
    format: '$0,0.00',
    raw: '0,0.00'
  }
}

// eslint-disable-next-line no-unused-vars
function parseLocaleNumber(stringNumber) {
  const thousandSeparator = (1111).toLocaleString().replace(/1/g, '')
  const decimalSeparator = (1.1).toLocaleString().replace(/1/g, '')

  return parseFloat(
    stringNumber
      .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '')
      .replace(new RegExp(`\\${decimalSeparator}`), '.')
  )
}

// eslint-disable-next-line import/prefer-default-export
export function setLocale(locale = 'USD') {
  // If a locale config was found for the specified locale, use it, otherwise default to the 'USD' config.
  const localeSettings = symbols[locale.toUpperCase()] || symbols.USD
  numeral.register('locale', locale, localeSettings)
  numeral.locale(locale)

  const format = function(val, raw = false) {
    const dollars = centsToDollars(val)
    return numeral(parseFloat(dollars)).format(raw ? localeSettings.raw : localeSettings.format)
  }

  const currencySymbol = function() {
    return localeSettings.currency.symbol
  }

  const currencySymbolPosition = function() {
    return numeral.localeData().currency.symbolPosition
  }

  const localeDecimal = function() {
    return numeral.localeData().delimiters.decimal
  }

  const localeThousands = function() {
    return numeral.localeData().delimiters.thousands
  }

  const centsToDollars = function(amt = 0, decimals = 2) {
    let value = amt

    if (typeof amt === 'string') {
      value = parseInt(value)
    }

    if (value === 0) {
      return `${value}`
    }

    if (decimals === 0) {
      return `${value / 100}`
    }

    return (value / 100).toFixed(decimals)
  }

  const dollarsToCents = function(amt) {
    const value =
      typeof amt === 'string'
        ? parseFloat(amt.replace(localeThousands(), '').replace(localeDecimal(), '.'))
        : amt

    return Math.round(100 * value)
  }

  const methods = {
    format,
    currencySymbol,
    currencySymbolPosition,
    localeDecimal,
    centsToDollars,
    dollarsToCents
  }

  return methods
}
