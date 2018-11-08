import { localeDecimal } from '../Localization';

export default function dollarsToCents(amt, currencyFormat = '') {
    const value = typeof amt === 'string'
        ? parseFloat(amt.replace(localeDecimal(currencyFormat), '.'))
        : amt;

    return Math.round(100 * value);
}
